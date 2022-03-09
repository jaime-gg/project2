/* eslint-disable no-use-before-define */

let coverColor;
let textColor;
let textfield;
let borderWSlider;
let borderColor;
let textSlider;
let titleSize;
let gradientCol;
let fontMenu;
var Canvas;

function setup() {
  Canvas = createCanvas(250, 350);
  //Canvas.parent('sketch');
  $('.canvas').append(Canvas);
  coverInputs();
  // var config
}

function draw() {
  background(coverColor.color());
  stroke(borderColor.value());
  strokeWeight(borderWSlider.value());
  fill(coverColor.color());
  rect(0, 0, width, height);
  noStroke();
  // gradientBG();
  textWrap(WORD);
  fill(textColor.color());
  titleSize = textSlider.value();
  textFont(fontMenu.value());
  text(textfield.value(), 0, 0, width, height);
  textSize(textSlider.value());
}

function coverInputs() {
  coverColor = createColorPicker('#ed225d');
  $('.canvas').append.coverColor;
  textColor = createColorPicker('#000');
  $('.canvas').append.textColor;
  borderColor = createColorPicker('#000');
  $('.canvas').append.borderColor;

  fontMenu = createSelect();
  fontMenu.option('Barrio');
  fontMenu.option('Codystar');
  fontMenu.option('Homemade Apple');
  fontMenu.option('IM Fell English SC');
  fontMenu.option('Turret Road');
  fontMenu.option('UnifrakturCook');
  $('.canvas').append.fontMenu;

  textSlider = createSlider(10, 100, 30);
  textSlider.style('width', '80px');
  $('.canvas').append.textSlider;

  borderWSlider = createSlider(0, 100, 30);
  borderWSlider.style('width', '80px');
  $('.canvas').append.borderWSlider;

  textAlign(CENTER, CENTER);
  textfield = select('#story-title');
}

function gradientBG() {
  noStroke();
  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {
      var c = 255 * noise(0.003 * x, 0.003 * y);
      fill(gradientCol.color.R, gradientCol.color.G, gradientCol.color.B, c);
      rect(x, y, 10, 10);
    }
  }
}

// function uploadCover() {
//   var ref= database.ref('covers');
//   var data= {

// };
// ref.push(cover);
// }

//capture the users bg color #, text color #, text size, and text content when save button is pressed
