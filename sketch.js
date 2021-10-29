let r1, r2, r3, r4, n;
let offset = 0;
let bg;
let button, controls;
let slider, dSlider, pSlider, dButton;

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

  canvas = createCanvas(600, 600, WEBGL);
  // canvas.parent(controls);
  // canvas.style('z-index', '-1');
  background(bg);
  stroke(0);
  strokeWeight(10);

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
  pSlider.html('Complexity: '+slider.value());

}

function reset(){
    r1 = round(random(1,n));
    r2 = round(random(1,n));
    r3 = round(random(1,n));
    r4 = round(random(1,n));
    background(bg);

}

function save(){
  save(slider,'my_canvas','png');
}
