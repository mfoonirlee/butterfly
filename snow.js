import { snowTxt, txt } from './const';
import Butterfly from './butterfly';
import BigBf from './bigbutterfly';
import img from './img9.jpeg';

const MAX_BUTTERFLY = 30;
const SPLIT_COUNT = 15;
// 转场时间
const INTERVAL_STAGE = 3000;
const BASIC_INTERVAL = 1000;
const INTERVAL_TIME = 100;

const imgList = [img];

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
            res.push({ fn: this.genHTML.bind(this, this.splitArr[i]), time: i != 0 ? INTERVAL_STAGE : 0, type: 0 });
            if (i != len - 1){
                // spliter
                res.push({ fn: this.removePrev.bind(this), time: this.splitArr[i].length * INTERVAL_TIME + BASIC_INTERVAL, type: 1 });
            }
        }        
        return res;
    }
    genHTML(wordArr){
        const html = wordArr.map((word, i) => {
            const delayStr = `-webkit-animation-delay: ${i * INTERVAL_TIME}ms; animation-delay: ${i * INTERVAL_TIME}ms;`
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
        setTimeout(()=>{ firstDom.remove() }, 2900); 
    }
}

let index = 0;
const fns = new TypingPrinter(snowTxt);
let start = Date.now();
let bCount = 0;
// 除去最后一页展示消耗的总时间
const totalTime = fns.map(({ time }) => time).reduce((cur, t) => cur + t, 0);
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
    }, 600);
    // add end
    setTimeout(() => {
        const dom = document.createElement('div');
        dom.innerHTML = 'Chris.';
        dom.className = 'end';
        document.body.appendChild(dom);
        clearInterval(timer);
    }, totalTime + 10000)
    // }, 1000);
    
}


