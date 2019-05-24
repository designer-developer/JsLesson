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