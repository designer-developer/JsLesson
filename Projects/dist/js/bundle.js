/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/Modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/Modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
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

}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/Timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/Timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
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
}

module.exports = timer;

/***/ }),

/***/ "./src/js/parts/calcSlider.js":
/*!************************************!*\
  !*** ./src/js/parts/calcSlider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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



/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
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

}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
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
};

module.exports = tabs; 

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
    "use strict"
    let calcSlider = __webpack_require__(/*! ./parts/calcSlider */ "./src/js/parts/calcSlider.js"),
        form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/Timer */ "./src/js/parts/Timer.js"),
        modal = __webpack_require__(/*! ./parts/Modal */ "./src/js/parts/Modal.js");

    calcSlider();
    form();
    tabs();
    timer();
    modal();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map