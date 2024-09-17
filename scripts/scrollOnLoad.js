window.addEventListener('load', () => {
    setTimeout(() => {
        const start = window.scrollY;
        const distance = window.innerHeight * 0.7;
        const duration = 2000; // Duración en milisegundos (2 segundos)
        let startTime = null;

        function smoothScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, start, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
        }

        // Función de easing para suavizar el desplazamiento
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(smoothScroll);
    }, 2000);
});
