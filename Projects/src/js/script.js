window.addEventListener('DOMContentLoaded', function () {
    "use strict"
    let calcSlider = require('./parts/calcSlider'),
        form = require('./parts/form'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/Timer'),
        modal = require('./parts/Modal');

    calcSlider();
    form();
    tabs();
    timer();
    modal();
});