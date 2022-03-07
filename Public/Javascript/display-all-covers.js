// instance mode p5 canvases
// also know as name spacing

const coverGen = function (p) {
  function fetchCover() {
    fetch('api/stories')
      .then((response) => response.json())
      .then((dbStoryData) => {
        // console.log(dbStoryData);
        for (let i = 1; i < dbStoryData.length; i++) {
          const c = dbStoryData[i];
           console.log(c);
          fill(c.bg);
          stroke(c.bc);
          strokeWeight(c.bw);
          rect(0, 0, width, height);
          noStroke();
          textWrap(WORD);
          fill(c.tc);
          var titleSize = c.ts;
          textFont(c.tf);
          text(c.tt, 0, 0, width, height);
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
        border_size: bw,
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
      // console.log(dbStoryData);
      for (let i = 1; i < dbStoryData.length; i++) {
        var myp5 = new p5(coverGen);
      }
    });
}

generatingAll();
