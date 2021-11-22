let r1, r2, r3, r4, n;
let offset = 0;
let bg;
let button, controls, refresh;
let slider, dSlider, pSlider, dButton, info;

function setup(){
  bg = color('#f1f1f1');
  controls = createDiv().addClass('controls');

  dSlider = createDiv();
  dSlider.parent(controls);
  dSlider.addClass('slider');
  slider = createSlider(1, 10, 3, 1);
  pSlider = createP();
  pSlider.parent(dSlider);
  slider.parent(dSlider);

  dButton = createDiv();
  dButton.parent(controls);
  dButton.addClass('button');
  button = createButton('Save Image');
  button.parent(dButton);
  refresh = createButton('Refresh');
  refresh.addClass('button');
  refresh.parent(dButton);

  info = createDiv();
  info.addClass('info');

  canvas = createCanvas(600, 600, WEBGL);
  background(bg);

  button.mousePressed(save);
  refresh.mousePressed(reset);


  n = 3;
  r1 = round(random(1,n));
  r2 = round(random(1,n));
  r3 = round(random(1,n));
  r4 = round(random(1,n));
}

function draw(){
  background(bg);
  n = slider.value();
  orbitControl(8,8);
  // push();
  // rotateY(radians(frameCount));
  // rotateX(radians(-30));
  // rotateZ(PI);
  strokeWeight(2);
  stroke(255,0, 0);
  line(0,0,0, 100, 0, 0);
  stroke(0,255,0);
  line(0,0,0, 0, 100, 0);
  stroke(0, 0, 255);
  line(0,0,0, 0, 0, 100);
  for (let i=0; i<400; i+=0.1){
    let r6 = 100 * (sin(radians(i*r1))+sin(radians(i*r2))+cos(radians(i*r1)));
    let r7 = 100 * (sin(radians(i*r3))+cos(radians(i*r4)));
    let r8 = 100 * (cos(radians(i*r2))+sin(radians(i*r1)));
    stroke(0);
    strokeWeight(10);
    point(r6, r7, r8);
    // offset += 0.1;
  }
  fill(0);
  let string = 'R1: '+r1+' R2:'+r2+' R3:'+r3+' R4:'+r4;
  pSlider.html('Complexity: '+slider.value());
  info.html(string);

}

function reset(){
    r1 = round(random(1,n));
    r2 = round(random(1,n));
    r3 = round(random(1,n));
    r4 = round(random(1,n));
    background(bg);

}

function save(){
  rotateZ(PI/2);
  save(canvas, 'my_canvas','png');
}
