import { test, txt } from './const';
import Butterfly from './butterfly';
import BigBf from './bigbutterfly';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';

const MAX_BUTTERFLY = 50;
const SPLIT_COUNT = 10;

const imgList = [img1, img2, img3, img4, img5, img6, img7, img8];

function randomInt(max, min = 1){
    return Math.floor(Math.random() * (max - min)) + min;
}

let imgIndex = 0;
class TypingPrinter {
    constructor(txt){
        return this.init(txt);
    }
    // generate split array for display
    init(txt) {
        const txtArr = txt.split('');

        this.splitArr = [];
        let tmp = [];
        let count = 0;
        txtArr.forEach(word => {
            tmp.push(word);
            if (word == '\n') {
                count++;
            }
            if(count == SPLIT_COUNT){
                this.splitArr.push(tmp);
                count = 0;
                tmp = [];
            }
        });

        this.splitArr.push(tmp);

        return this.genTimeFn();
    }
    genTimeFn(){
        const res = [];
        for (let i = 0, len = this.splitArr.length; i < len; i++) {
            res.push({ fn: this.genHTML.bind(this, this.splitArr[i]), time: i != 0 ? 3000 : 0, type: 0 });
            if (i != len - 1){
                // spliter
                res.push({ fn: this.removePrev.bind(this), time: this.splitArr[i].length * 100 + 1000, type: 1 });
            }
        }
        return res;
    }
    genHTML(wordArr){
        const html = wordArr.map((word, i) => {
            const delayStr = `-webkit-animation-delay: ${i * 100}ms; animation-delay: ${i * 100}ms;`
            switch(word) {
                case '\n':
                    return '<br />';
                case ' ':
                    return `<span class="txt">&nbsp;<i class="mask" style="${delayStr}"></i></span>`;
                case '#':
                    return `<span class="txt"><img class="img" src='${imgList[imgIndex++]}' /><i class="mask" style="${delayStr}"></i></span>`;
                default:
                    return `<span class="txt">${word}<i class="mask" style="${delayStr}"></i></span>`;
            }
        }).join('');

        const div = document.createElement("div");
        div.className = "txt-wrapper";
        div.innerHTML = html;        
        
        document.body.appendChild(div);
    }
    removePrev(){
        const list = document.getElementsByClassName('txt-wrapper');
        const firstDom = list && list[0];
        firstDom.className = `${firstDom.className} fadeOut`;
        new BigBf;
        setTimeout(()=>{ firstDom.remove() }, 2800); 
    }
}

let index = 0;
const fns = new TypingPrinter(txt);
let start = Date.now();
let bCount = 0;

// new BigBf;

// console.log(fns);
window.onload = function() {
    const timer = setInterval(() => {
        const now = Date.now();
        
        if (fns[index] && fns[index].time < now - start) {
            fns[index].fn();
            start = Date.now();
            index++;
        }
    
        if (bCount < MAX_BUTTERFLY && Math.random() > .5) {
            bCount++;
            new Butterfly
        }
    }, 500);
    // add end
    setTimeout(() => {
        const dom = document.createElement('div');
        dom.innerHTML = 'End.';
        dom.className = 'end';
        document.body.appendChild(dom);
        clearInterval(timer);
    }, 254000)
    // }, 1000);
    
}


