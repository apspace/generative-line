let r1, r2, r3, r4, n;
let offset = 0;
let button;

function setup(){
  canvas = createCanvas(600, 600, WEBGL);
  canvas.position(windowWidth/2-canvas.width/2, windowHeight/2-canvas.height/2);
  background(245);
  stroke(0);
  strokeWeight(10);
  n = 5;
  r1 = round(random(1,n));
  r2 = round(random(1,n));
  r3 = round(random(1,n));
  r4 = round(random(1,n));

  button = createButton('Save');
  button.mousePressed(save);
  // button.position(windowWidth/2-canvas.width/2, windowHeight/2+canvas.height/2+24);
  canvas.mousePressed(reset);

}

function draw(){
  for (let i=0; i<20; i++){
  let r6 = 120 * (sin(radians(offset*r1))+sin(radians(offset*r2)));
  let r7 = 120 * (sin(radians(offset*r3))+cos(radians(offset*r4)));
  point(r6, r7);
  offset += 0.1;
  }
}

function reset(){
    r1 = round(random(1,n));
    r2 = round(random(1,n));
    r3 = round(random(1,n));
    r4 = round(random(1,n));
    background(245);

}

function save(){
  saveCanvas('canvas', 'png');
}
