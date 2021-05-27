class Marcianitos{
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.vida = 1;

    }

    
    mostrar(x,y){

        for (let index = 0; index < this.vida; index++) {
            
            fill(189,236,182);

			noStroke();
			rect(this.x, this.y, 25, 20);

			rect(this.x + 25, this.y, 5, 25);
			rect(this.x - 5, this.y, 5, 25);

			rect(this.x + 30, this.y + 5, 5, 10);
			rect(this.x - 10, this.y + 5, 5, 10);

			rect(this.x + 35, this.y + 10, 5, 15);
			rect(this.x - 15, this.y + 10, 5, 15);

			rect(this.x, this.y + 25, 10, 5);
		    rect(this.x + 15, this.y + 25, 10, 5);

			rect(this.x, this.y - 5, 5, 5);
			rect(this.x + 20, this.y - 5, 5, 5);

			rect(this.x - 5, this.y - 10, 5, 5);
			rect(this.x + 25, this.y - 10, 5, 5);

			fill(0,0,0);

			rect(this.x, this.y + 5, 5, 5);
			rect(this.x + 20, this.y + 5, 5, 5);
            
        }
    }

	


}