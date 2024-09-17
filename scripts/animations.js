// Animaciones para h1 y h2
const h1Element = document.querySelector('h1');
const h2Element = document.querySelector('h2');

const h1Keyframes = [
    { 
        opacity: 0,
        transform: 'translateY(0) translateX(0)',
        transformOrigin: '50% 50%',
        textShadow: 'none'
    },
    { 
        opacity: 1,
        transform: 'translateY(-50px) translateX(-100px)',
        transformOrigin: '50% 50%',
        textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)'
    }
];

const h2Keyframes = [
    { 
        opacity: 0,
        transform: 'translateY(20px)'
    },
    { 
        opacity: 1,
        transform: 'translateY(0)'
    }
];

const h1Options = {
    duration: 1000,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fill: 'both'
};

const h2Options = {
    duration: 500,
    easing: 'ease-out',
    fill: 'both',
    delay: 1000
};

h1Element.animate(h1Keyframes, h1Options);
h2Element.animate(h2Keyframes, h2Options);
