import img1 from './Butterfly_1.svg';
import img2 from './Butterfly_2.svg';
import img3 from './Butterfly_3.svg';
import img4 from './Butterfly_4.svg';
import img5 from './Butterfly_5.svg';
import './bigbutterfly.css';

const imgList = [img1, img2, img3, img4, img5];


function randomInt(max, min = 1){
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class BigButterfly{
    constructor(top, left){
        const divContainer = document.createElement('div');
        divContainer.className = `butterfly${randomInt(8)}`;
        divContainer.innerHTML = `<span class="butterflyOuter transitionSlow" style="left:${left};top:${top}"><span class="butterflyInner transition color${randomInt(5)}"></span></span>`;
        document.body.appendChild(divContainer);        
    }
}