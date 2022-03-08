const router = require('express').Router();
const { User, Story } = require('../models');

// ADD ROUTES THAT LOAD ENTIRE PAGE OF All AUTHORS
router.get('/', (req, res) => {
  User.findAll({
    attributes: ['id', 'username', 'about_me', 'created_at'],
    include: [
      {
        model: Story,
        attributes: ['id'],
      },
    ],
  })
    .then((dbUserData) => {
      const users = dbUserData.map((user) => user.get({ plain: true }));
      // pass a single post object into the homepage template
      res.render('authors', {
        users,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ADD ROUTES THAT LOAD ENTIRE PAGE OF A SPECIFIC AUTHOR'S STORIES
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'username', 'about_me', 'created_at'],
    include: [
      {
        model: Story,
        attributes: [
          'id',
          'title',
          'body',
          'cover_color',
          'title_color',
          'font_size',
          'font',
          'border_width',
          'border_color',
        ],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }

      const user = dbUserData.get({ plain: true });
      const story = dbUserData.story.get({ plain: true });
      res.render('single-user', {
        user,
        story,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
