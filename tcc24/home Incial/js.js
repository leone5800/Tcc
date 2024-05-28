document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    const backToTopBtn = document.getElementById('back-to-top');

    // Adicionando funcionalidade de mostrar/ocultar respostas nas perguntas frequentes
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Adicionando funcionalidade para mostrar o header ao rolar para baixo
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("animate__slideInDown", window.scrollY < 100);
        header.classList.toggle("animate__slideOutUp", window.scrollY > 100);
    });

    // Adicionar funcionalidade para trocar o idioma ao clicar nas bandeiras
    document.querySelectorAll('.language-link').forEach(item => {
        item.addEventListener('click', event => {
            const lang = item.dataset.lang;
            // Simular a mudança de idioma aqui (por exemplo, recarregando a página com o novo idioma)
            console.log("Idioma alterado para: " + lang);
            event.preventDefault();
        });
    });

    // Fazer o header acompanhar a rolagem da página
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    };

    // Exibir ou ocultar o botão "Voltar ao Topo" conforme a posição da página
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1'; // Tornar a seta visível
        } else {
            backToTopBtn.style.opacity = '0'; // Ocultar a seta
        }
    });

    // Rolagem suave para o topo ao clicar no botão "Voltar ao Topo"
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave para o topo
        });
    });
});


