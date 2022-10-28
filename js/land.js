landDom = document.querySelector('.land');
landStyle = getComputedStyle(landDom);
landHeight = parseFloat(landStyle.height);
landWidth = parseFloat(landStyle.width);
landTop = skyHeight-landHeight;
//生成子类
class land extends rectFather{
    constructor(){
        super(landWidth,landHeight,0,landTop,-100,0,landDom);
    }
    onMove(){
        if(this.left <= -landWidth / 2){
            this.left = 0;
        }
    }
}
