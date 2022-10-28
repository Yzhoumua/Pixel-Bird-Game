const game = document.querySelector('.birdgame')
const gameStyle = getComputedStyle(game);
const gameHeight = parseFloat(gameStyle.height) - landHeight;
const gameWidth = parseFloat(gameStyle.width);
class pipe extends rectFather {
    constructor(height, top, Xspeed, dom) {
        super(52, height, gameWidth, top, Xspeed, 0, dom);
    }
    onMove() {
        if (this.left < 0 - 52) {
            this.dom.remove();
        }
    }
}
function get(min, max) {

    return Math.floor(Math.random() * + (max - min) + min)
}
class pipes {
    constructor(Xspeed) {
        this.pipeKongHeight = 250;
        this.minHeight = 80;
        this.maxHeight = gameHeight - this.pipeKongHeight - this.minHeight;
        const pipedownHeight = get(this.maxHeight, this.minHeight)
        const downDom = document.createElement('div');
        downDom.className = 'pipedown'
        this.pipedown = new pipe(pipedownHeight, 0, Xspeed, downDom)

        const pipeupHeight = gameHeight - pipedownHeight - this.pipeKongHeight;
        const pipeupTop = gameHeight - pipeupHeight;
        const upDom = document.createElement('div');
        upDom.className = 'pipeup';
        this.pipeup = new pipe(pipeupHeight, pipeupTop, Xspeed, upDom);
        game.appendChild(downDom);
        game.appendChild(upDom);
    }
    Move(delay) {
        this.pipeup.Move(delay);
        this.pipedown.Move(delay);
    }
    get useLess() {
        return this.pipeup.left < 0 - 52;
    }
}

class pipesCont {
    constructor(Xspeed) {
        this.Xspeed = Xspeed;
        this.pairs = [];
        this.timer = null;
        this.tick = 2000;
    }
    stratProduce() {
        if (this.tiemr) {
            return;
        }
        this.timer = setInterval(() => {
            this.pairs.push(new pipes(this.Xspeed));
            for (let i = 0; i < this.pairs.length; i++) {
                let pair = this.pairs[i];
                if (pair.useLess) {
                    this.pairs.splice(i, 1);
                    i--;
                }
            }
        }, this.tick);
    }
    stopProduce() {
        clearInterval(this.timer);
        this.timer = null
    }
}


