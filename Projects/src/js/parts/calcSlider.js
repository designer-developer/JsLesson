function calcSlider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');

    }

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    showSlides(slideIndex)

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        };

    });

    //calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        inputValue = document.querySelectorAll(".counter-block-input");


    totalValue.textContent = 0;


    inputValue.forEach(function (elem, i, item) {
        item[i].addEventListener("change", function () {
            item[i].value = item[i].value.replace(/[^0-9]/gi, " ");

        });





        persons.addEventListener('change', function () {
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if (restDays.value == "" || restDays.value.charAt(0) == 0 || persons.value.charAt(0) == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total
            }
        });

        restDays.addEventListener('change', function () {
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if (persons.value == "" || restDays.value.charAt(0) == 0 || persons.value.charAt(0) == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total
            }
        });

        place.addEventListener('change', function () {
            if (restDays.value == "" || persons.value == "" || restDays.value.charAt(0) == 0 || persons.value.charAt(0) == 0) {
                totalValue.innerHTML = 0
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value
            }
        });
    });
}

module.exports = calcSlider;

