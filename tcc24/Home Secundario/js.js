document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de clique ao ícone de busca
    document.getElementById('search-icon').addEventListener('click', function() {
        search();
    });

    // Adiciona evento de clique ao campo de busca
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            search();
        }
    });
});

// Função para realizar a busca
function search() {
    var searchTerm = document.getElementById('search-input').value;
    if (searchTerm.trim() !== '') {
        alert('Realizar busca por: ' + searchTerm);
    } else {
        alert('Digite algo para pesquisar.');
    }
}

// Função para alternar o menu lateral
function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// Função para fazer logoff
function logoff() {
    alert('Função de logoff ainda não implementada.');
}
document.addEventListener('DOMContentLoaded', function() {
    // Array com os textos que serão exibidos
    var texts = ["Encontre os melhores produtos com os melhores preços!", "Explore nossa variedade de produtos!", "Descubra ofertas incríveis todos os dias!"];
    var index = 0;
    var textElement = document.querySelector('.text-container h2');

    // Função para alternar os textos com efeito de fade
    function changeTextWithFade() {
        textElement.classList.add('fade-out'); // Adiciona a classe para iniciar o fade-out

        setTimeout(function() {
            textElement.textContent = texts[index]; // Atualiza o texto
            textElement.classList.remove('fade-out'); // Remove a classe para iniciar o fade-in
        }, 500); // Aguarda 500ms antes de atualizar o texto para permitir o efeito de fade-out

        index = (index + 1) % texts.length;
    }

    // Inicia a animação, alterando o texto com efeito de fade a cada 3 segundos
    setInterval(changeTextWithFade, 3000);
});
document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    // Função para alternar os slides
    function nextSlide() {
        // Oculta o slide atual
        slides[currentSlide].style.opacity = 0;

        // Avança para o próximo slide
        currentSlide = (currentSlide + 1) % slides.length;

        // Exibe o próximo slide
        slides[currentSlide].style.opacity = 1;
    }

    // Inicia o slideshow automaticamente
    setInterval(nextSlide, 5000); // Altere o valor (em milissegundos) para ajustar a velocidade do slideshow
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

    window.addEventListener('DOMContentLoaded', function() {
        // Função para centralizar a logo horizontalmente
        function centerLogo() {
            var logo = document.querySelector('.logo-container');
            var windowWidth = window.innerWidth;
            var logoWidth = logo.offsetWidth;
    
            // Calcula a posição horizontal central da logo
            var leftPosition = (windowWidth - logoWidth) / 2;
    
            // Define a posição da logo
            logo.style.left = leftPosition + 'px';
        }
    
        // Chama a função ao carregar a página e ao redimensionar a janela
        window.addEventListener('resize', centerLogo);
        centerLogo(); // Chama a função inicialmente ao carregar a página
    });
    

    window.addEventListener('DOMContentLoaded', function() {
        // Função para centralizar a logo horizontalmente
        function centerLogo() {
            var logo = document.querySelector('.logo-container');
    
            // Define a posição da logo como 50% da largura da janela
            logo.style.left = '50%';
            logo.style.transform = 'translateX(-50%)'; // Centraliza a logo
        }
    
        // Chama a função ao carregar a página e ao redimensionar a janela
        window.addEventListener('resize', centerLogo);
        centerLogo(); // Chama a função inicialmente ao carregar a página
    });
    

    