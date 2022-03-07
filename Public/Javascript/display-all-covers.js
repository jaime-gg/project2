// instance mode p5 canvases
// also know as name spacing






const coverGen = p=>  {

  p.setup= function(){
 var cnv= p.createCanvas(250, 350);
  cnv.parent('sketch');
  cnv.style("z-index: -1");
    fill(p.bg);
    stroke(p.bc);
    strokeWeight(p.bw);
    rect(0, 0, width, height);
    noStroke();
    textWrap(WORD);
    fill(p.tc);
    titleSize = p.ts;
    textFont(p.tf);
    text(p.tt, 0, 0, width, height);
    textSize(titleSize);
 }

 p.draw()= function(){}

}
  myp5.bg = Cover.cover_color;
  myp5.bc = Cover.border_color;
  myp5.bw = Cover.border_size;
  myp5.ts = Cover.font_size;
  myp5.tf = Cover.font;
  myp5.tc = Cover.title_color;
  myp5.tc = Cover.title;
  var myp5 = new p5(coverGen);

