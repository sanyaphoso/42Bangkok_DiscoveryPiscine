document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll('.boxbox > [class^="card"]');
    cards.forEach(function (card) {
        card.addEventListener("mouseover", function () {
            card.classList.add("hover");
        });
        card.addEventListener("mouseout", function () {
            card.classList.remove("hover");
        });
    });

});

let currentIndex = 0;
const slides = document.querySelectorAll('.mySlides');
const slideTexts = document.querySelectorAll('.slide-text');

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = i === currentIndex ? 'block' : 'none';
        slideTexts[i].style.display = i === currentIndex ? 'block' : 'none';
    }
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 2000);
showSlide(currentIndex);
