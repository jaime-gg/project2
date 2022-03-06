/* eslint-disable no-use-before-define */



let titleSize;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  var cnv = createCanvas(100, 100);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
  cnv.parent('sketch-holder');
}

function windowResized() {
  centerCanvas();
}

class Cover(){
  background(Cover.cover_color);
  stroke(Border.border_color);
  strokeWeight(Cover.border_size);
  fill(Cover.cover_color);
  rect(0,0,width, height);
  noStroke();
textWrap(WORD);
  fill(Cover.title_color);
  titleSize = Cover.font_size;
  textFont(Cover.font);
  text(Story.title, 0, 0, width, height);
  textSize(titleSize);
}