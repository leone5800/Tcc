// Script para alternar as imagens no carrossel
const images = document.querySelectorAll('.carousel-images img');
let currentImage = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function showNextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage);
}

setInterval(showNextImage, 3000);

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);

    form.reset();
});

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('show');
});
