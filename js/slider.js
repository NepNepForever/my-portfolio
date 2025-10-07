document.addEventListener('DOMContentLoaded', function () {
    const offerSection = document.querySelector('.offer');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');

    const images = [
        'url(./img/1.jpg)',
        'url(./img/31.jpg)',
        'url(./img/fon1.jpg)' // Добавьте сюда пути к вашим изображениям
    ];

    let currentIndex = 0;

    function updateBackgroundImage() {
        offerSection.style.backgroundImage = images[currentIndex];
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateBackgroundImage();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateBackgroundImage();
    });

    // Инициализация начального фона
    updateBackgroundImage();
});