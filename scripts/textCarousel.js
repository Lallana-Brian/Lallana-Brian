// Arreglo de frases
const frases = [
    "Un descanso eterno entre la serenidad de la naturaleza.",
    "Donde la paz y la memoria se entrelazan en cada rincón.",
    "Un homenaje visual al silencio y la reflexión",
];

const textoElement = document.getElementById("changing-text");
let fraseActual = 0;

function cambiarFrase() {
    textoElement.style.opacity = 0;

    setTimeout(() => {
        textoElement.textContent = frases[fraseActual];
        textoElement.style.opacity = 1;
        fraseActual = (fraseActual + 1) % frases.length;
    }, 1500);
}

setInterval(cambiarFrase, 4500);
textoElement.style.opacity = 1;
