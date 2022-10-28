// 鸟，天空，大地，管子，有宽度，高度，位置等信息，添加为一个父类
//生成父类
class rectFather {
    //宽度，高度，横坐标，纵坐标，横向速度，纵向速度，dom本身
    constructor(width, height, left, top, Xspeed, Yspeed, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.Xspeed = Xspeed;
        this.Yspeed = Yspeed;
        this.dom = dom;
        this.rander();
    }
    //渲染动画方法
    rander() {
        this.dom.style.top = this.top + 'px';
        this.dom.style.left = this.left + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.width = this.width + 'px';
    }
    //动画生成
    Move(delay) {
        const xdis = this.Xspeed * delay;
        const ydis = this.Yspeed * delay;
        this.left = xdis + this.left;
        this.top = ydis + this.top;
        if (this.onMove) {
            this.onMove();
        }
        this.rander();
    }
}










































