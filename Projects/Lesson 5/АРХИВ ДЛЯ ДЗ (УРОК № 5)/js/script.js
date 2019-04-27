let menu = document.querySelector(".menu"),
    butt = document.querySelectorAll("li"),
    title = document.querySelector('#title'),
    advert = document.querySelector(".adv"),
    column = document.querySelector('body > div:nth-child(3)'),
    ask = document.querySelector('#prompt');

menu.insertBefore(butt[2], butt[1]);

title.innerHTML = 'Мы продаем только подлинную технику Apple';

column.removeChild(advert);

ask.textContent = "Как вы относитесь к технике Apple?";