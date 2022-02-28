let coverColor;
let textColor;
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
}

function draw() {
  background(coverColor.color());
  text(title, width / 2, height / 2);
  fill(textColor.color());
  textSize(textSlider.value());
}
