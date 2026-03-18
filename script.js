let currentFaces = 0;
let isRolling = false;

// Coordenadas SVG optimizadas para formas grandes y centradas
const svgShapes = {
    'd4': '<polygon points="50,2 98,95 2,95" class="dice-svg-shape"/>',
    'd6': '<rect x="6" y="6" width="88" height="88" rx="12" class="dice-svg-shape"/>',
    'd8': '<polygon points="50,2 98,50 50,98 2,50" class="dice-svg-shape"/>',
    'd10': '<polygon points="50,2 98,38 82,98 18,98 2,38" class="dice-svg-shape"/>'
};

function prepareDice(type, faces) {
    if (isRolling) return;

    const display = document.getElementById('dice-display');
    const resultText = document.getElementById('result-text');
    const hint = document.getElementById('hint');
    
    // Feedback visual en el Dock (Selección)
    document.querySelectorAll('.dock-item').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(type)) btn.classList.add('active');
    });

    // Resetear animaciones de la unidad central
    display.classList.remove('show');
    display.classList.remove('pulse-hit'); 
    
    setTimeout(() => {
        // Inyectar la nueva figura SVG
        display.innerHTML = `
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                ${svgShapes[type]}
            </svg>
        `;
        resultText.innerText = "";
        currentFaces = faces;
        display.classList.add('show');
        hint.classList.remove('hidden');
    }, 150);
}

// Evento de Lanzamiento al hacer Click/Tap en el escenario
document.getElementById('main-stage').addEventListener('click', () => {
    if (!currentFaces || isRolling) return;

    const display = document.getElementById('dice-display');
    const resultText = document.getElementById('result-text');
    const hint = document.getElementById('hint');
    
    isRolling = true;
    resultText.innerText = "";
    hint.classList.add('hidden');
    display.classList.remove('pulse-hit');
    display.classList.add('rolling');

    setTimeout(() => {
        // Generar número aleatorio
        const result = Math.floor(Math.random() * currentFaces) + 1;
        
        display.classList.remove('rolling');
        
        // --- AJUSTE ÓPTICO PARA EL D4 ---
        if (currentFaces === 4) {
            resultText.style.transform = 'translateY(12px)'; 
        } else {
            resultText.style.transform = 'translateY(0px)';
        }

        // --- VIBRACIÓN HÁPTICA (Solo móviles compatibles) ---
        if (window.navigator.vibrate) {
            window.navigator.vibrate(50); // Vibración corta de 50ms
        }

        // Mostrar resultado y animar impacto
        resultText.innerText = result;
        isRolling = false;
        display.classList.add('pulse-hit');
        
        // Brillo de confirmación en el borde del SVG
        const shape = display.querySelector('.dice-svg-shape');
        shape.style.stroke = "white";
        
        setTimeout(() => {
            shape.style.stroke = "var(--accent)";
            if(!isRolling) hint.classList.remove('hidden');
        }, 300);

    }, 700); // Duración del giro: 0.7 segundos
});