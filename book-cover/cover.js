/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
let coverColor;
let textColor;
let textfield;
let title = 'hi';
let textSlider;

// let inconsolata;
// function preload() {
//   inconsolata = loadFont("assets/inconsolata.otf");
// }

function setup() {
  createCanvas(250, 350);
  coverColor = createColorPicker('#ed225d');
  textColor = createColorPicker('#000');
  //   textFont(inconsolata);

  textSlider = createSlider(10, 100, 30);
  textSlider.style('width', '80px');

  textAlign(CENTER, CENTER);
  textfield = select('#title');
  button = createButton('save');
  button.mousePressed(uploadCover());
}

function draw() {
  background(coverColor.color());
  text(textfield.value(), width / 2, height / 2);
  fill(textColor.color());
  textSize(textSlider.value());
}

function uploadCover() {
  save('bookCover.jpg');
}

//capture the users bg color #, text color #, text size, and text content when save button is pressed

//use router post to save() p5 sketch with the vairables above into a database connected to story content +user info

///////////////

// from the p5.js issue "Save( ) function save on server #2733"
// https://github.com/processing/p5.js/issues/2733

// " p5.js is a client side library meaning that it runs on the browser and thus will have no knowledge of the structure/architecture of the server, it doesn't know it is served from the script folder for example so it won't know how to "save" any file.

// An alternative solution is to prepare an endpoint on your server (which means you need to write some backend code) which receive this data from the client. Then the client just need to send the data, in p5.js using something like httpPost, then the server can save the file in the right place. Do ask on the forum if you need help with this. :wink"

//////////////

// https://github.com/processing/p5.js/issues/3353
// extracted using toDataUrl request => returned as base64 stream =>


// jk i think im gonna jsut save the user valeus to the db so that the covers can be generated to the page live
