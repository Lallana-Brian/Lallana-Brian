// Abrir el modal con la imagen seleccionada
function openModal(mediaElement) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");

    modal.style.display = "block";

    // Si es una imagen, actualiza la fuente de la imagen en el modal
    modalImage.src = mediaElement.src;
}

// Cerrar el modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar el modal cuando se presione la tecla 'Esc'
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

