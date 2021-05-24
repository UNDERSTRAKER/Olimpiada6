class Tanque{
    constructor(x,y) {
        this.x = 460;
        this.y = 900;
    }
    mostrar(){
        fill(255,0,0);
        noStroke();
        rect(this.x,this.y,40,10);
        rect(this.x + 5, this.y - 5, 30, 5);
        rect(this.x + 15, this.y - 15, 10, 10);
        rect(this.x + 18, this.y - 20, 5 , 5);

    }

    mover(){

        if(tecla == 'a') {
            this.x += 5;
        }

        if(tecla == 'd') {
            this.y += 5;
        }  

    }
}