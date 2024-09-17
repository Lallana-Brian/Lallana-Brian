// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Manejo de la visibilidad del título en la galería al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
    const galleryHeader = document.querySelector('.gallery-header');

    function handleScroll() {
        const sectionTop = galleryHeader.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sectionTop < viewportHeight * 0.75) {
            galleryHeader.classList.add('visible');
        } else {
            galleryHeader.classList.remove('visible');
        }
    }

    // Llama a la función de manejo de scroll al cargar y al hacer scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llama también al cargar la página para manejar la visibilidad inicial
});
