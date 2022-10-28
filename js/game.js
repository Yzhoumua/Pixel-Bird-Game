class Game {
    constructor() {
        this.sky = new sky();
        this.land = new land(-100);
        this.bird = new bird();
        this.pipesCont = new pipesCont(-100);
        this.timer = null;
        this.tick = 16;
        this.gameOver = false;
        this.pipeOn = false;
    }

    start() {
        if (this.timer) {
            return
        }
        if (this.gameOver) {
            window.location.reload();
        }
        this.pipesCont.stratProduce();//开始生成柱子
        this.bird.swingStrat();
        this.timer = setInterval(() => {
            const duration = this.tick / 1000;
            this.sky.Move(duration);
            this.land.Move(duration);
            this.bird.Move(duration);
            this.pipesCont.pairs.forEach(pire => {
                pire.Move(duration)
            })
            // 判断游戏是否结束
            if (this.isGameOver()) {
                this.stop();
                this.gameOver = true;
            }
        }, this.tick);
    }
    //游戏暂停
    stop() {
        clearInterval(this.timer);
        this.timer = null;
        this.bird.swingStop();
        this.pipesCont.stopProduce();
    }

    isGameOver() {
        // 鸟碰到大地
        if (this.bird.top === this.bird.gameHeight) {
            return true;
        }
        for (let i = 0; i < this.pipesCont.pairs.length; i++) {
            const pair = this.pipesCont.pairs[i];
            this.pipesCont.pairs[i].onBird = true;
            this.pipesCont.pairs[i].on = true;
            if (this.isHit(this.bird, pair.pipeup) || this.isHit(this.bird, pair.pipedown)) {
                return true;
            }
            if (this.bird.left > this.pipesCont.pairs[i].pipedown.left) {
                if (this.pipesCont.pairs[i].onBird && this.pipesCont.pairs[i].on) {
                    console.log(1);
                    this.pipesCont.pairs[i].on = true;
                    this.pipesCont.pairs[i].onBird = false;
                }
            }
        }
        return false;
    }
    isHit(rec1, rec2) {
        // 横向：两个矩形的中心点的横向距离，是否小于矩形宽度之和的一半
        // 纵向：两个矩形的中心点的纵向距离，是否小于矩形高度之和的一半
        var centerX1 = rec1.left + rec1.width / 2;
        var centerY1 = rec1.top + rec1.height / 2;
        var centerX2 = rec2.left + rec2.width / 2;
        var centerY2 = rec2.top + rec2.height / 2;
        var disX = Math.abs(centerX1 - centerX2); //中心点横向距离
        var disY = Math.abs(centerY1 - centerY2);//中心点总想距离
        if (disX < (rec1.width + rec2.width) / 2 &&
            disY < (rec1.height + rec2.height) / 2
        ) {
            return true;
        }
        return false;
    }
    //    关联键盘事件
    regEvent() {
        window.onkeydown = (e) => {
            if (e.key === "Enter") {
                if (this.timer) {
                    this.stop();
                }
                else {
                    this.start();
                }
            }
            else if (e.key === " ") {
                this.bird.jump();
            }
        }
    }

}

//判断两个矩形是否碰撞
const game1 = new Game()
game1.regEvent()



