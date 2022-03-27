// captures the current ID
var ID = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];
//console.log(id);

async function fetchCover(req) {
  let response = await fetch('/api/stories/' + req);
  let coverInfo = await response.json();
  ///return coverInfo;
console.log(coverInfo);
  // instance mode p5 canvases
  // also know as name spacing
  var coverGen = function (p) {
    // will be used later in windowResized to gather width information on the story-text div
    let w;

    function postCover(bg, bc, bw, tc, ts, tf, tt) {
      fetch('/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: {
          title: tt,
          cover_color: bg,
          title_color: tc,
          font: tf,
          font_size: ts,
          border_color: bc,
          border_width: bw,
        },
      });
    }

    // fetch request that gathers cover data according to id

    // p5 function that only runs once and initialiazes the canvas
    p.setup = function () {
      var cnv = p.createCanvas(
        p.select('#grabbing-size').width / 2.2,
        (p.select('#grabbing-size').width / 2.1) * 1.408
      );
      cnv.parent('coversketch');
      cnv.style('z-index: 1');
      var covCol;

      // fetchCover(id).then((coverInfo) => {
      //   coverInfo;
      // });

     
    };

    // continuous p5 function that allows the div to be resized
    p.draw = function () {
      p.fill(coverInfo.cover_color)
      p.stroke(coverInfo.border_color);
      p.strokeWeight(coverInfo.border_width);
      p.rect(0, 0, p.width, p.height);
      p.noStroke();
      p.textWrap(p.WORD);
      p.fill(coverInfo.title_color);
      var titleSize = coverInfo.font_size;
      p.textFont(coverInfo.font);
      p.textAlign(p.CENTER, p.CENTER);
      p.text(coverInfo.title, 0, 0, p.width, p.height);
      p.textSize(titleSize);
    };

    // resizes the canvas/cover everytime the window is resized according to half the width of the div below it
    p.windowResized = function () {
      w = p.select('#grabbing-size').width / 2.2;
      p.resizeCanvas(w, w * 1.408);
    };
  };

  new p5(coverGen);
}

fetchCover(ID);
