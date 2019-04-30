function clock() {
    let t = new Date(),
    hours = t.getHours(),
    minutes = t.getMinutes(),
    seconds = t.getSeconds();

    
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    time = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("time-now").innerHTML = time;
     setTimeout("clock()", 1000);
    };

clock()