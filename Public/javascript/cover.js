/* eslint-disable no-use-before-define */

let coverColor;
let textColor;
let borderWSlider;
let borderColor;
let textSlider;
let titleSize;
let fontMenu;
let w;
var Canvas;

function setup() {
  Canvas = createCanvas(
    select('#grabbing-size').width / 2.5,
    (select('#grabbing-size').width / 2.5) * 1.408
  );
  Canvas.parent('sketch');
  //$('.canvas').append(Canvas);
  coverInputs();
  // var config
}

function draw() {
  let title;
  title = select('#story-title').value();
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
  textAlign(CENTER, CENTER);
  text(title, 0, 0, width, height);
  textSize(textSlider.value());
}

function windowResized() {
  w = select('#grabbing-size').width / 2.5;
  resizeCanvas(w, w * 1.408);
}

function coverInputs() {
  coverColor = createColorPicker('#FFFFFF');
  coverColor.parent('cover-inputs');
  coverColor.id('coverColor');
  textColor = createColorPicker('#000');
  textColor.parent('cover-inputs');
  textColor.id('textColor');
  borderColor = createColorPicker('#000');
  borderColor.parent('cover-inputs');
  borderColor.id('borderColor');

  fontMenu = createSelect();
  fontMenu.option('Barrio');
  fontMenu.option('Codystar');
  fontMenu.option('Homemade Apple');
  fontMenu.option('IM Fell English SC');
  fontMenu.option('Turret Road');
  fontMenu.option('UnifrakturCook');
  fontMenu.parent('cover-inputs');
  fontMenu.id('fontMenu');

  textSlider = createSlider(10, 100, 30);
  textSlider.style('width', '80px');
  textSlider.parent('cover-inputs');
  textSlider.id('textSlider');

  borderWSlider = createSlider(0, 100, 30);
  borderWSlider.style('width', '80px');
  borderWSlider.parent('cover-inputs');
  borderWSlider.id('borderWSlider');
}

//capture the users bg color #, text color #, text size, and text content when save button is pressed
