// Script para alternar as imagens no carrossel
const images = document.querySelectorAll('.carousel-images img');
let currentImage = 0;

// Exibir a imagem atual
function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

// Função para mostrar a próxima imagem
function showNextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage);
}

// Iniciar o carrossel
setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos

// Gerenciar o envio do formulário de contato
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    // Por enquanto, vamos apenas mostrar um alerta com os dados
    alert(`Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);

    // Limpar o formulário após o envio
    form.reset();
});

// Gerenciar o menu hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('show'); // Alterna a classe para mostrar/ocultar o menu
});
