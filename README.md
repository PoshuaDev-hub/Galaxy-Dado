# 🌌 GALAXY DADO | Neural Dice System

**GALAXY DADO** es una experiencia web inmersiva diseñada para la generación de resultados aleatorios. Bajo una estética *Cyber-Minimalist*, el proyecto utiliza gráficos vectoriales dinámicos y micro-interacciones de vanguardia para ofrecer una interfaz fluida, futurista y altamente responsiva.

Este es un proyecto personal desarrollado con el objetivo de explorar la convergencia entre el diseño de interfaces (UI) de alto impacto y la experiencia de usuario (UX) técnica.

---

## 🚀 Características Técnicas

- **Renderizado Vectorial (SVG):** Implementación de polígonos mediante coordenadas matemáticas para asegurar que las figuras de los dados mantengan un relieve perfecto y bordes nítidos en cualquier resolución.
- **Centrado Óptico Dinámico:** Algoritmo personalizado para el Dado 4 (tetraedro) que ajusta el eje vertical del resultado para compensar la asimetría visual de la figura, logrando una armonía estética superior.
- **Feedback Háptico:** Integración de la API de vibración para dispositivos móviles, proporcionando una respuesta física táctil al momento de generar el resultado.
- **Atmósfera Inmersiva:** - Anillos de energía animados con degradados de neón (Cian y Púrpura).
  - Efecto de pulso (*Pulse Hit*) al finalizar cada tirada.
  - Dock de navegación con indicadores visuales de estado activo.

## 🛠️ Stack Tecnológico

- **Lenguajes:** HTML5, CSS3, JavaScript (ES6+).
- **Gráficos:** SVG dinámico inyectado y manipulado vía DOM.
- **Tipografía:** Orbitron & Inter (Google Fonts).

---

## 🎮 Guía de Uso

1. **Selección:** Utiliza el menú inferior para elegir entre Dado 4, 6, 8 o 10.
2. **Materialización:** La entidad seleccionada aparecerá en el centro del "Singularity Core".
3. **Lanzamiento:** Haz clic o "Tap" sobre la figura para iniciar la secuencia aleatoria.

---

## 🧪 Desafíos Técnicos Superados

### Optimización de Relieve en Polígonos
A diferencia del cubo (D6), las formas complejas como el triángulo o el pentágono suelen perder profundidad visual con sombras CSS estándar. Se resolvió mediante el uso de **SVG con filtros de `drop-shadow`**, permitiendo que el relieve cian se adapte a la geometría real del polígono.

### Balance Visual del D4
Dado que el centro de masa visual de un triángulo difiere de su centro geométrico, se implementó un **offset dinámico en JavaScript** para ajustar la posición del número solo cuando este dado está activo, garantizando un equilibrio visual perfecto.

---

## 👨‍💻 Autor

**Joshua Chiguay** *Estudiante de Ingeniería Civil en Informática* *Puerto Aysen, Chile*

---

## 📜 Licencia

MIT License - Este proyecto es de código abierto y está disponible para uso personal o educativo.