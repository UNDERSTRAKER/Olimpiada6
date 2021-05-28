
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
const marcianos = [mar1, mar2, mar3, mar4, mar5, mar6, mar7];

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  tanque.mostrar();

  /* mar1.mostrar();
  mar2.mostrar();
  mar3.mostrar();
  mar4.mostrar();
  mar5.mostrar();
  mar6.mostrar();
  mar7.mostrar(); */
  tanque.mover();
  
  tanque.sumarVelDisparo();

  marcianos.forEach(function(mar) {
    mar.mostrar();
    tanque.getFe().forEach(function(bala, index) {
      if(mar.getVida()>0 && validarDisparoMarciano(mar, bala)) {
        mar.setVida(0);
        tanque.getFe().splice(index, 1);
      }
    });
  });

  
 
  
}

function validarDisparoMarciano(mar, bala) {
  if(mar.getX()-15 < bala.getX() && mar.getX()+40 > bala.getX()
  && mar.getY()-10 < bala.getY() && mar.getY()+30 > bala.getY()) {
    return true;
  }
  return false;
}


