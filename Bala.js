class Bala{
    constructor(x,y){
        this.x = x+18;
        this.y = y-30;
    }

    pintar(){

        fill(255);
        rect(this.x,this.y,3,10);
    }
    mover(){
        this.y -= 4;
    }
}