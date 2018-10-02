function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(243, 229, 245);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here


  //Fig 1
  push();
  translate(width/2,height/2);
  rotate(frameCount/2);
  scale(0.6);


  stroke(lerpColor(color('#B2EBF2'), color('#00BCD4'), frameCount/200));
  line(sin(frameCount)*200,cos(frameCount)*500,cos(180)*200,sin(180)*200);
  pop();


  //Fig 2
  push();
  translate(width/2,height/2);
  rotate(frameCount/2);
  scale(0.6);

  stroke(lerpColor(color('#00BCD4'), color('#B2EBF2'), frameCount/200));
  line(sin(frameCount)*200,cos(frameCount)*500,cos(0)*200,sin(0)*200);


  pop();

}
