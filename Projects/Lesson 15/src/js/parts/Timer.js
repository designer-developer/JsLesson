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