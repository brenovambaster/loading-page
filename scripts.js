document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica para o menu hamburger ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (para navegação em one-page)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // --- Lógica para animação ao rolar a página ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Quando o elemento entra na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    });

    // Adiciona o observer aos elementos que você quer animar
    const elementsToAnimate = document.querySelectorAll('.hero-text, .hero-image, .about, .services, .contact');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});