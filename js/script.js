let slideActive;
let timer = 0;
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll('.dots');

slides.forEach((slide, index) => {
    if (slide.classList.contains('active') === true) {
        slideActive = index + 1;
        slide.childNodes[1].textContent = `${slideActive} / ${slides.length}`;
    }
});


setInterval(() => {
    timer++;
    if (timer > 10) {
        slideActive++
        showSlides(slideActive);
    }
}, 1000);


function showSlides(index) {
    if (index > slides.length) slideActive = 1;
    if (index < 1) slideActive = slides.length;

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
    })

    slides[slideActive - 1].classList.add('active');
    dots[slideActive - 1].classList.add('active');

    slides[slideActive - 1].childNodes[1].textContent = `${slideActive} / ${slides.length}`;

    timer = 0;
}

function slideArrow(index) {
    showSlides(slideActive += index);
}

function slideDot(index) {
    showSlides(slideActive = index);
}





