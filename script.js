document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');

    hero.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = hero;
        let { clientX: x, clientY: y } = e;

        // Get mouse position relative to the hero element
        const rect = hero.getBoundingClientRect();
        x = x - rect.left;
        y = y - rect.top;

        const xRotation = 20 * ((y - height / 2) / height);
        const yRotation = -20 * ((x - width / 2) / width);

        const titleTransform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateZ(50px)`;
        const textTransform = `rotateX(${xRotation * 0.8}deg) rotateY(${yRotation * 0.8}deg) translateZ(30px)`;

        heroTitle.style.transform = titleTransform;
        heroText.style.transform = textTransform;
    });

    hero.addEventListener('mouseleave', () => {
        heroTitle.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
        heroText.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
    });
});