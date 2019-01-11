import img1 from './butterfly-1.gif';
import img2 from './butterfly-2.gif'; 

const imgArr = [img1, img2];
let counter = 0;

function randomItem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

class Butterfly{
    constructor() {
        this.imgSrc = randomItem(imgArr);
        this.dire = Math.random() > .5 ? 'left' : 'right';
        this.size = `size${Math.ceil(Math.random() * 4)}`;
        this.speed = `speed${Math.ceil(Math.random() * 2)}`;
        this.topStr = `top: ${Math.floor(Math.random() * 100)}%`;
        this.xStr = `${this.dire}: ${-Math.floor(Math.random() * 300) - 60}px`;
        this.product();
    }
    product() {
        const div = document.createElement('div');
        div.className = `butterfly ${this.dire} ${this.size} ${this.speed}`;
        div.style = `${this.topStr};${this.xStr};`;
        div.innerHTML = `<div><p><span style="background-image: url(${this.imgSrc})"></span></p></div>`;
        document.body.appendChild(div);
    }
}

const timer = setInterval(() => {
    if (counter++ < 50) {
        new Butterfly        
    } else {
        clearInterval(timer);
    }
}, 1000)