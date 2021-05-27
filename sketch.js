
let disparado = true;



let bala = new Bala();
let tanque = new Tanque();
let mar1 = new Marcianitos(275,300);
let mar2 = new Marcianitos(405,300);
let mar3 = new Marcianitos(535,300);
let mar4 = new Marcianitos(665,300);
let mar5 = new Marcianitos(340,450);
let mar6 = new Marcianitos(470,450);
let mar7 = new Marcianitos(600,450);


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  tanque.mostrar();

  if(disparado == true)
    mar1.mostrar();
  if(disparado == true)
    mar2.mostrar();
  if(disparado == true)
   mar3.mostrar();
  if(disparado == true)
    mar4.mostrar();
  if(disparado == true)
    mar5.mostrar();
  if(disparado == true)
    mar6.mostrar();
  if(disparado == true)
    mar7.mostrar();
  tanque.mover();


  if (dist( this.mar1 < this.bala) &&  disparado == true) {
    disparado = false;
    console.log("sirve");
  }
  
}

