window.addEventListener("DOMContentLoaded", function () {

    "use strict";
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTapContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTapContent(1);

    function showTapContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTapContent(0);
                    showTapContent(i);
                    break;
                }
            }
        }
    })

    // Timer

    let deadline = '2019-10-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        if (minutes <= 9) minutes = "0" + minutes;
        if (seconds <= 9) seconds = "0" + seconds;
        if (hours <= 9) hours = "0" + hours;

        if (t < 0) {
            hours = "00";
            minutes = "00";
            seconds = "00";

        }
        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        }


    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;



            if (t.total <= 0) {
                clearInterval(timeInterval);

            }

        }


    }

    setClock('timer', deadline);

    // Модельное окно

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; // запрещаем прокрутку страницы при открытом модельном окне
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    let btn = document.querySelectorAll('.description-btn');




    btn.forEach(function (item) {
        item.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
        })
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    // Form

    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так"
    };

    function callForm(cb) {

        let form = document.querySelector(cb),
            input = document.getElementsByTagName('input'),
            statusMessage = document.createElement('div');

        statusMessage.classList.add('status');


        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);

            function postData() {
                return new Promise((resolve, reject) => {

                    let request = new XMLHttpRequest();
                    request.open("POST", "server.php");
                    request.setRequestHeader("Content-type", "application/json; charset=utf-8");

                    let formData = new FormData(form);

                    let obj = {};
                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);

                    request.onreadystatechange = function () {

                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };

                    request.send(json);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = "";
                }
            }

            postData()
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);

            close.addEventListener("click", () => {
                if (form.contains(statusMessage)) {
                    form.removeChild(statusMessage);
                }
            });
        });

    }
    callForm('.main-form');
    callForm('#form');

    function phoneNumber() {
        let placeholder = "+7 (___) ___ __ __",
            i = 0,
            inp1 = placeholder.replace(/\D/g, ""),
            inp2 = this.value.replace(/\D/g, "");

        if (inp1.length >= inp2.length) {
            inp1 = inp2;
        }

        this.value = placeholder.replace(/./g, (a) => {
            return /[_\d]/.test(a) && i < inp2.length ? inp2.charAt(i++) : i >= inp2.length ? "" : a;
        });

    }
    let input = document.querySelectorAll(".phone-number");
    input.forEach((item) => {
        item.addEventListener("input", phoneNumber);
    });

    // Slider && calc

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


    // inputValue.forEach(function (elem, i, item) {
    //     item[i].addEventListener("change", function () {
    //         item[i].value = item[i].value.replace(/[^0-9]/gi, " ");

    //     });


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
});