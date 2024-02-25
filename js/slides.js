let slideIndex;
const ALL_SLIDES = document.getElementsByClassName("slides-cont");

function showSlides() {
    for(let i = 0; i < ALL_SLIDES.length; i++) {
        let currentSlide = ALL_SLIDES[i];

        if(i !== slideIndex) {
            currentSlide.style.display = "none";
            currentSlide.className.replace(" fade", "");
        }
        else {
            currentSlide.style.display = "flex";
            currentSlide.className += " fade";
        }

    }
}

function changeSlide(direction) {
    slideIndex += direction;
    if(slideIndex > ALL_SLIDES.length - 1) {
        slideIndex = 0;
    }
    else if(slideIndex < 0) {
        slideIndex = ALL_SLIDES.length - 1;
    }
    showSlides();
}

function initialize() {
    slideIndex = 0;
    showSlides();
}

document.initialize = initialize;
document.changeSlide = changeSlide;