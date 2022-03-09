// instance mode p5 canvases
// also know as name spacing

var coverGen = function (p) {
  var id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  //console.log(id);

  function fetchCover() {
    fetch(`/api/stories/${id}`)
      .then((response) => response.json())
      .then((dbStoryData) => {
        console.log(dbStoryData);
        const c = dbStoryData;
        //  console.log(c);
        p.fill(c.cover_color);
        p.stroke(c.border_color);
        p.strokeWeight(c.border_size);
        p.rect(0, 0, width, height);
        p.noStroke();
        p.textWrap(WORD);
        p.fill(c.title_color);
        var titleSize = c.font_size;
        p.textFont(c.font);
        p.text(c.title, 0, 0, width, height);
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

  p.setup = function () {
    var cnv = p.createCanvas(250, 350);
    $('#coversketch').append(cnv);
    // cnv.parent('coversketch');
    cnv.style('z-index: 1');
    p.fill(0);
    //fetchCover();
  };

  // p.draw()=function(){
  //   postCover();
  // }
};

var myp5 = new p5(coverGen);
