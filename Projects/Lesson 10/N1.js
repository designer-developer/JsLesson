'use strict'

class Options {
    constructor(height, width, backgroundColor, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.backgroundColor = backgroundColor;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {

        let div = document.createElement("div");
        div.textContent = 'Это квардарт';
        div.classList.add('cssText');
        div.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.backgroundColor}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        document.body.appendChild(div);
    }
}
let box = new Options (50, 50, `#FF0000`, 10, ``);
box.createDiv();

