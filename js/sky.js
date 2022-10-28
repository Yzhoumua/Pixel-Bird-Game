skyDom = document.querySelector('.sky');
skyStyle = getComputedStyle(skyDom);
skyHeight = parseFloat(skyStyle.height);
skyWidth = parseFloat(skyStyle.width);

//生成子类
class sky extends rectFather{
    constructor(){
        super(skyWidth,skyHeight,0,0,-100,0,skyDom);
    }
    onMove(){
        if(this.left <= -skyWidth / 2){
            this.left = 0;
        }
    }
}
