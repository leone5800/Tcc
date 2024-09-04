//header
document.getElementById('hamburger').addEventListener('click', function() {
    document.body.classList.toggle('menu-active');
});
//

//carrosel
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove("current", "previous");
            if (i === index) {
                slide.classList.add("current");
            } else if (i === (index + slides.length - 1) % slides.length) {
                slide.classList.add("previous");
            }
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Inicializar a exibição
    showSlide(currentIndex);
});
//


document.addEventListener("DOMContentLoaded", function() {
    const locSection = document.querySelector('.loc');
    const animatedElements = document.querySelectorAll('.animate-up');
    const button = document.querySelector('.btn');
    let buttonInView = false;

    const checkScroll = () => {
        const locSectionTop = locSection.getBoundingClientRect().top;
        const halfViewportHeight = window.innerHeight / 2;

        // Verificar se a seção "loc" está visível na tela
        if (locSectionTop < halfViewportHeight) {
            animatedElements.forEach(element => {
                element.classList.add('in-view');
            });
            buttonInView = true;
        } else {
            animatedElements.forEach(element => {
                element.classList.remove('in-view');
            });
            buttonInView = false;
        }
    };

    // Adicionar um ouvinte de evento de scroll à janela
    window.addEventListener('scroll', () => {
        checkScroll();
        // Adicionar ou remover classe 'hide' no botão
        if (buttonInView) {
            button.classList.remove('hide');
        } else {
            button.classList.add('hide');
        }
    });

    // Verificar a posição do scroll ao carregar a página
    checkScroll();
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-list a, .logo a');

    // Adiciona a classe fade-in quando a página é carregada
    document.body.classList.add('fade-in');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            const targetUrl = this.href;

            // Adiciona a classe fade-out ao corpo
            document.body.classList.add('fade-out');

            // Aguarda a animação completar antes de navegar
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Ajuste este valor de acordo com a duração da animação
        });
    });
});