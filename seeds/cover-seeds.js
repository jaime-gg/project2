const { Cover } = require('../models');

const coverdata = [
  {
    cover_color: '#f21b3f',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Barrio',
    border_width: '5px' ,
    border_color: '#1B181D' ,
    story_id: 1,

  },
  {
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Homemade Apple',
    border_width: '5px' ,
    border_color: '#424044' ,
    story_id: 2,
    
  },
  {
    cover_color: '#f21b3f',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Codystar',
    border_width: '5px' ,
    border_color: '#1B181D' ,
    story_id: 3
  },
  {
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'IM Fell English SC',
    border_width: '5px' ,
    border_color: '#424044' ,
    story_id: 4
  },
  {
    cover_color: '#C78631',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Barrio',
    border_width: '5px' ,
    border_color: '#1B181D' ,
    story_id: 5
  },
  {
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Homemade Apple',
    border_width: '5px' ,
    border_color: '#424044' ,
    story_id: 6
  },
  {
    cover_color: '#f21b3f',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'IM Fell English SC',
    border_width: '5px' ,
    border_color: '#1B181D' ,
    story_id: 7
  },
  {
    cover_color: '#C78631',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Homemade Apple',
    border_width: '5px' ,
    border_color: '#424044' ,
    story_id: 8
  },
  {
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Barrio',
    border_width: '5px' ,
    border_color: '#1B181D' ,
    story_id: 9
  },
  {
    cover_color: '#C78631',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Codystar',
    border_width: '5px' ,
    border_color: '#424044' ,
    story_id: 10
  },
  {
    cover_color: '#08bdbd',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Homemade Apple',
    border_width: '5px' ,
    border_color: '#1B181D' ,
    story_id: 11
  },
  {
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Barrio',
    border_width: '5px' ,
    border_color: '#424044' ,
    story_id: 12
  },
  {
    cover_color: '08bdbd',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Homemade Apple',
    border_width: '5px' ,
    border_color: '#1B181D' ,
    story_id: 13
  },
  {
    cover_color: '#8624B0',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Barrio',
    border_width: '5px' ,
    border_color: '#424044' ,
    story_id: 14
  },
  {
    cover_color: 'f21b3f',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Turret Road',
    border_width: '5px' ,
    border_color: '#1B181D' ,
    story_id: 15
  },
  {
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'UnifrakturCook',
    border_width: '5px' ,
    border_color: '#424044' ,
    story_id: 16
  },
  {
    cover_color: '#C78631',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'canvas-div',
    border_width: '5px' ,
    border_color: '#1B181D' ,
    story_id: 17
  },
  {
    cover_color: 'f21b3f',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Barrio',
    border_width: '5px',
    border_color: '#424044' ,
    story_id: 18
  },
  {
    cover_color: '#8624B0',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'canvas-div',
    border_width: '5px',
    border_color: '#1B181D' ,
    story_id: 19
  },
  {
    cover_color: '08bdbd',
    title_color: '#ffffff',
    font_size: '15px',
    font: 'Barrio',
    border_width: '5px',
    border_color: '#424044',
    story_id: 20
  },
];


const seedCovers = () => Cover.bulkCreate(coverdata);

module.exports = seedCovers;