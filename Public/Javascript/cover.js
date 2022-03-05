/* eslint-disable no-use-before-define */

let coverColor;
let textColor;
let textfield;
let border;
let title = 'hi';
let textSlider;
let titleSize;
let gradientCol;
let fontMenu;
var inc = 0.01;
var Canvas;
let noiseVal;
let noiseScale = 0.02;




function setup() {
  Canvas = createCanvas(250, 350);
  Canvas.parent('canvas-div');
  coverInputs();
  
  //gradientCol = createColorPicker('#04e50d');
  // button.mousePressed(uploadCover());
}

function draw() {
 // console.log(coverColor.color.levels);

  //console.log(titleSize);
  background(coverColor.color());
  // gradientBG();
textWrap(WORD);
  fill(textColor.color());
  titleSize = textSlider.value();
  textFont(fontMenu.value());
  text(textfield.value(), 0, 0, width, height);
  textSize(textSlider.value());
}

function coverInputs(){
  coverColor = createColorPicker('#ed225d');
  textColor = createColorPicker('#000');
  textColor.parent('canvas-div');
  coverColor.parent('canvas-div');

  fontMenu = createSelect();
  fontMenu.option('Barrio');
  fontMenu.option('Codystar');
  fontMenu.option('Homemade Apple');
  fontMenu.option('IM Fell English SC');
  fontMenu.option('Libre Barcode 128 Text');
  fontMenu.option('Turret Road');
  fontMenu.option('UnifrakturCook');
  fontMenu.parent('canvas-div');

  textSlider = createSlider(10, 100, 30);
  textSlider.style('width', '80px');
  textSlider.parent('canvas-div');

  textAlign(CENTER, CENTER);
  textfield = select('#title');
  button = createButton('save');
  button.parent('canvas-div');
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

function uploadCover() {
  save('bookCover.jpg');
}

//capture the users bg color #, text color #, text size, and text content when save button is pressed

