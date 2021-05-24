
let tanque = new Tanque();


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  tanque.mostrar();
  
}

function KeyPressed() {
  tanque.mover();

}
