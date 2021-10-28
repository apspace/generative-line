let r1, r2, r3, r4, n;
let offset = 0;
let button;

function setup(){
  canvas = createCanvas(800, 800, WEBGL);
  canvas.position(windowWidth/2-canvas.width/2, windowHeight/2-canvas.height/2);
  background(240);
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
  for (let i=0; i<10; i++){
  let r6 = 150 * (sin(radians(offset*r1))+sin(radians(offset*r2)));
  let r7 = 150 * (sin(radians(offset*r3))+cos(radians(offset*r4)));
  point(r6, r7);
  offset += 0.2;
  }
}

function reset(){
    r1 = round(random(1,n));
    r2 = round(random(1,n));
    r3 = round(random(1,n));
    r4 = round(random(1,n));
    background(240);

}

function save(){
  saveCanvas('canvas', 'png');
}
