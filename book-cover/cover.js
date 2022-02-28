let coverColor;
let textColor;
let textfield;
let title = "hi";
let textSlider;

// let inconsolata;
// function preload() {
//   inconsolata = loadFont("assets/inconsolata.otf");
// }

function setup() {
  createCanvas(250, 350);
  coverColor = createColorPicker("#ed225d");
  textColor = createColorPicker("#000");
  //   textFont(inconsolata);

  textSlider = createSlider(10, 100, 30);
  textSlider.style("width", "80px");

  textAlign(CENTER, CENTER);
  textfield = select("#title");
  button = createButton("save");
  button.mousePressed(uploadCover());
}

function draw() {
  background(coverColor.color());
  text(textfield.value(), width / 2, height / 2);
  fill(textColor.color());
  textSize(textSlider.value());
}

function uploadCover() {
  save("bookCover.jpg");
}

//capture the users bg color #, text color #, text size, and text content when save button is pressed

//use router post to save() p5 sketch with the vairables above into a database connected to story content +user info
