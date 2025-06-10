let x=200;
let sW=50;

function setup() {
  createCanvas(600, 330);
  strokeWeight(sW);
  stroke(100,103,23);

}

function draw() {
 background(220,110,x);
  x=x+10;
  if(x>width+sW/2){
    x=-sW;
}
    point(x,200);
  
}
