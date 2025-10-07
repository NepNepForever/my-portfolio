document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.comment-slider-wrapper');
    const slides = document.querySelectorAll('.comment-slider-item');
    const prevButton = document.getElementById('prevComment');
    const nextButton = document.getElementById('nextComment');
    let currentIndex = 0;

    function updateSliderPosition() {
        const offset = -currentIndex * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    });

    // Инициализация начальной позиции
    updateSliderPosition();
});