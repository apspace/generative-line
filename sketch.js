let r1, r2, r3, r4, n;
let offset = 0;
let button;
let slider, d1, d2;

function setup(){
  canvas = createCanvas(600, 600, WEBGL);
  canvas.position(windowWidth/2-canvas.width/2, windowHeight/2-canvas.height/2);
  background(245);
  stroke(0);
  strokeWeight(10);

  d1 = createDiv();
  slider = createSlider(1, 10, 3, 1);
  d2 = createDiv();
  d2.style('padding-top', '12px');
  button = createButton('Save');
  button.mousePressed(save);
  canvas.mousePressed(reset);

  n = 3;
  r1 = round(random(1,n));
  r2 = round(random(1,n));
  r3 = round(random(1,n));
  r4 = round(random(1,n));

}

function draw(){
  n = slider.value();
  for (let i=0; i<20; i++){
  let r6 = 120 * (sin(radians(offset*r1))+sin(radians(offset*r2)));
  let r7 = 120 * (sin(radians(offset*r3))+cos(radians(offset*r4)));
  point(r6, r7);
  offset += 0.1;
  }
  d1.html("Complexity: "+slider.value());

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
