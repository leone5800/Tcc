let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.nav-list a');

// Adiciona um evento de clique a cada link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        // Aplica a classe de fade-out ao conteúdo atual
        document.body.classList.add('fade-out');

        // Aguarda a duração da animação antes de navegar para a nova página
        setTimeout(() => {
            window.location.href = this.href;
        }, 500); // 500ms corresponde à duração da animação definida em .fade-out
    });
});

// Aplica a classe de fade-in ao carregar a nova página
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
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