let coverColor;
let textColor;
let title = "hi";
// let inconsolata;
// function preload() {
//   inconsolata = loadFont("assets/inconsolata.otf");
// }

function setup() {
  createCanvas(250, 350);
  coverColor = createColorPicker("#ed225d");
  textColor = createColorPicker("#ed225d");
  //   textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(coverColor.color());
  text(title, width / 2, height / 2);
  fill(textColor.color());
}
