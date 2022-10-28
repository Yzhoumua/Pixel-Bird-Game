//生成小鸟
const birdDom = document.querySelector('.bird');
const birdStyle = getComputedStyle(birdDom);
const birdHeight = parseFloat(birdStyle.height);
const birdWidth = parseFloat(birdStyle.width);
const birdTop = parseFloat(birdStyle.top);
const birdleft = parseFloat(birdStyle.left);
class bird extends rectFather{
    constructor(){
        super(birdWidth,birdHeight,birdleft,birdTop,0,100,birdDom);
        this.g = 1500;
        this.gameHeight = skyHeight - landHeight - birdHeight;
        this.swingMove = 1;
        this.timer = null;
        this.rander();
    }
    //翅膀动画
    rander(){ //自身方法
        super.rander(); //拿父类的方法
        this.dom.className = `bird swing${this.swingMove}`;
    }
    //翅膀动画开始
    swingStrat(){
        if(this.timer = null){
            return;
        }
      this.timer =  setInterval(() => {
            this.swingMove ++;
            if(this.swingMove === 4){
                this.swingMove = 1
            }
        }, 100);
    }
    swingStop(){
        clearInterval(this.timer);
        this.timer = null;
    }
    Move(delay){
        super.Move(delay);
        this.Yspeed += delay * this.g;
    }
    onMove(){
        if(this.top < 0){
            this.top = 0;
        }else if(this.top > this.gameHeight){
            this.top = this.gameHeight;
        }
    }
    jump(){
        this.Yspeed = -450;
    }
}
