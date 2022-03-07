const router = require('express').Router();
const { Story, User, Comment } = require('../models');
const withAuth = require('../utils/with-auth');

// GET ALL OF YOUR STORIES
router.get('/', (req, res) => {
  Story.findAll({
    where: {
      // CURRENT SESSION GIVES THE USER ID | GATHER ALL STORIES WITH THIS USER ID
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'body',
      'title',
      'about_me',
      'created_at'
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
      },
      {
        model: Cover,
        attributes: [
          'id',
          'cover_color',
          'title_color',
          'font_size',
          'font',
          'border_size',
          'border_color',
        ],
      },
    ]
  })
    .then(dbStoryData => {
      const stories = dbStoryData.map(story => story.get({ plain: true }));
      res.render('profile', { stories, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ALLOW USERS TO EDIT THEIR OWN STORIES | ONLY ALLOW WHEN LOGGED IN
router.get('/edit/:id', withAuth, (req, res) => {
  // FIND BY PRIMARY KEY
  Story.findByPk(req.params.id, {
    attributes: [
      'id',
      'body',
      'title',
      'created_at'
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
      if (dbStoryData) {
        const story = dbStoryData.get({ plain: true });

        res.render('edit-story', {
          story,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;