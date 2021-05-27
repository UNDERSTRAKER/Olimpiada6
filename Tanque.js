class Tanque {
    constructor(x,y) {
        this.x = 460;
        this.y = 900;
        //this.bala = new Bala(this.x,this.y);
        this.fe = []

    }
    mostrar(){
        fill(255,0,0);
        noStroke();
        rect(this.x,this.y,40,10);
        rect(this.x + 5, this.y - 5, 30, 5);
        rect(this.x + 15, this.y - 15, 10, 10);
        rect(this.x + 18, this.y - 20, 5 , 5);
        
        for (let index = 0; index < this.fe.length; index++) {
        
            this.fe[index].pintar();
            this.fe[index].mover();
        }

    }

    mover(){
        if(keyIsPressed){
            switch(key){
                case 'a':
                    this.x -=4;
                    break;
                case 'd':
                    this.x +=4;
                    break;
                case 'l':
                    this.fe.push(new Bala(this.x,this.y));
                    break;
            }
        }
    }

    

}