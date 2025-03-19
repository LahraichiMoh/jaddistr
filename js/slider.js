document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.ed-slider');
    const sliderItems = document.querySelectorAll('.ed-slider-item');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= sliderItems.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = sliderItems.length - 1;
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100;
        document.querySelector('.ed-slider-items').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Add event listeners
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        prevSlide();
    });

    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        nextSlide();
    });

    // Auto slide
    setInterval(nextSlide, 5000);

    // Initialize
    showSlide(0);
});