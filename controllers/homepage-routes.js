const router = require('express').Router();
const { Story, User, Comment } = require('../models');

//RENDER ALL STORIES
router.get('/', (req, res) => {
  Story.findAll({
    // ORDERED SO NEWEST REMAIN AT TOP
    order: [['created_at', 'DESC']],
    attributes: [
      'id',
      'body',
      'title',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'story_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbStoryData => {
      const stories = dbStoryData.map(story => story.get({ plain: true }));
      res.render('homepage', {
        stories,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ADD ROUTES THAT ALLOW LOGIN AND SIGNUP PAGES TO RENDER

// IF NOT ALREADY LOGGED IN, RENDER THE LOGIN PAGE

// ADD ROUTES THAT ALLOW USERS TO VIEW SINGLE STORIES
//    // THIS SHOULD INCLUDE ALL EXISTING COMMENTS

module.exports = router;