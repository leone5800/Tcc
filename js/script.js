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
