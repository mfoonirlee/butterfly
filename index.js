import Butterfly from './butterfly';

let counter = 0;

const timer = setInterval(() => {
    if (counter++ < 50) {
        if (counter == 3) {
            var div = document.createElement('div');
            div.innerHTML = '<div class="text-words"><p class="fsn">Fate/stay night</p><p class="mid white">Heaven\'s Feel</p><p class="mid white">presage flower</p><p class="sm red slowAni">2019&nbsp.&nbsp1&nbsp.&nbsp11</p><p class="mid red slowAni">on view</p></div><p class="fadeIn">Made By @boltCat</p>';
            document.body.appendChild(div);
        }
        new Butterfly        
    } else {
        clearInterval(timer);
    }
}, 1000)