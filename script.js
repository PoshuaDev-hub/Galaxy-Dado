let currentFaces = 0;
let isRolling = false;

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
    
    // Activar botón en el Dock
    document.querySelectorAll('.dock-item').forEach(btn => {
        btn.classList.remove('active');
        // Usamos una forma más segura de detectar el click en móvil
        if(btn.getAttribute('onclick').includes(type)) btn.classList.add('active');
    });

    display.classList.remove('show');
    display.classList.remove('pulse-hit'); 
    
    setTimeout(() => {
        // Forzamos el renderizado del SVG
        display.innerHTML = `
            <svg viewBox="0 0 100 100" style="width:100%; height:100%;">
                ${svgShapes[type]}
            </svg>
        `;
        resultText.innerText = "";
        currentFaces = faces;
        display.classList.add('show');
        hint.classList.remove('hidden');
    }, 150);
}

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
        const result = Math.floor(Math.random() * currentFaces) + 1;
        
        display.classList.remove('rolling');
        
        if (currentFaces === 4) {
            resultText.style.transform = 'translateY(12px)'; 
        } else {
            resultText.style.transform = 'translateY(0px)';
        }

        // --- VIBRACIÓN MEJORADA ---
        if ("vibrate" in navigator) {
            navigator.vibrate(50); 
        }

        resultText.innerText = result;
        isRolling = false;
        display.classList.add('pulse-hit');
        
        const shape = display.querySelector('.dice-svg-shape');
        if(shape) {
            shape.style.stroke = "white";
            setTimeout(() => {
                shape.style.stroke = "var(--accent)";
                if(!isRolling) hint.classList.remove('hidden');
            }, 300);
        }

    }, 700);
});