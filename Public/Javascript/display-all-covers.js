// instance mode p5 canvases
// also know as name spacing

const coverGen = function (p) {
  function fetchCover() {
    fetch('/stories')
      .then((response) => response.json())
      .then((dbStoryData) => {
        console.log(dbStoryData);
        for (let i = 1; i < dbStoryData.length; i++) {
          const c = dbStoryData[i];
          console.log(c);
          fill(c.cover_color);
          stroke(c.border_color);
          strokeWeight(c.border_size);
          rect(0, 0, width, height);
          noStroke();
          textWrap(WORD);
          fill(c.title_color);
          var titleSize = c.font_size;
          textFont(c.font);
          text(c.title, 0, 0, width, height);
          textSize(titleSize);
        }
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

  p.setup = function () {
    var cnv = p.createCanvas(250, 350);
    $('#coversketch').append(cnv);
    // cnv.parent('coversketch');
    cnv.style('z-index: 1');
    fetchCover();
    // console.log('itsgoing');
  };

  // p.draw()=function(){
  //   postCover();
  // }
};

// var myp5 = new p5(coverGen);

function generatingAll() {
  fetch('api/stories')
    .then((response) => response.json())
    .then((dbStoryData) => {
      console.log(dbStoryData);
      // for (let i = 1; i < dbStoryData.length; i++) {
      //   var myp5 = new p5(coverGen);
      // }
    });
}

generatingAll();
