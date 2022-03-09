// instance mode p5 canvases
// also know as name spacing

var coverGen = function (p) {

  // will be used later in windowResized to gather width information on the story-text div
  let w;

  // captures the current id
  var id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  //console.log(id);

  // fetch request that gathers cover data according to id
  function fetchCover() {
    fetch(`/api/stories/${id}`)
      .then((response) => response.json())
      .then((dbStoryData) => {
        //console.log(dbStoryData);
        const c = dbStoryData;
        // console.log(c);
        // c.cover_color
        p.fill(c.cover_color);
        p.stroke(c.border_color);
        p.strokeWeight(c.border_width);
        p.rect(0, 0, p.width, p.height);
        p.noStroke();
        p.textWrap(p.WORD);
        p.fill(c.title_color);
        var titleSize = c.font_size;
        p.textFont(c.font);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(c.title, 0, 0, p.width, p.height);
        p.textSize(titleSize);
      });
  }

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

  // p5 function that only runs once and initialiazes the canvas
  p.setup = function () {
    var cnv = p.createCanvas((p.select('#grabbing-size').width / 2.2), (p.select('#grabbing-size').width / 2.1)*1.408);
    //$('.coversketch').append(cnv);
    cnv.parent('coversketch');
    cnv.style('z-index: 1');
    // p.fill(0);
  };

  // continuous p5 function that allows the div to be resized
  p.draw = function () {
    fetchCover();
  };

  // resizes the canvas/cover everytime the window is resized according to half the width of the div below it
  p.windowResized = function () {
    w = p.select('#grabbing-size').width / 2.2;
    p.resizeCanvas(w, w * 1.408);
  };
};

new p5(coverGen);
