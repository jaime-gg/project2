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
  Story.findAll({
    where: {
      user_id: req.params.id,
    },
    attributes: [
      'id',
      'title',
      'body',
      'created_at',
      'cover_color',
      'title_color',
      'font_size',
      'font',
      'border_width',
      'border_color',
    ],
    include: [
      {
        model: User,
        attributes: ['id', 'username', 'about_me', 'created_at'],
      },
    ],
  })
    .then((dbUserData) => {
      const stories = dbUserData.map((user) => user.get({ plain: true }));
      console.log(stories);
      const username = stories[0].user.username;
      const about_me = stories[0].user.about_me;
      const created_at = stories[0].user.created_at;

      res.render('single-user', {
        stories,
        username,
        about_me,
        created_at,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ADD ROUTES THAT LOAD ONE AUTHOR
// router.get('/:id', (req, res) => {
//   User.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: ['id', 'username', 'about_me', 'created_at'],
//   })
//     .then((dbUserData) => {
//       const users = dbUserData.get({ plain: true });
//       // pass a single post object into the homepage template
//       res.render('single-user', {
//         users,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
