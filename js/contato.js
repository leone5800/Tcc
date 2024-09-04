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


