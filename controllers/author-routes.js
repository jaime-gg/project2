const router = require('express').Router();
const { User, Story } = require('../models');

// ADD ROUTES THAT LOAD ENTIRE PAGE OF A SPECIFIC AUTHOR'S STORIES
router.get('/', (req, res) => {
  User.findAll({
    attributes: [
      'id',
      'username',
      'about_me',
      'created_at'
    ],
    include: [
      {
        model: Story,
        attributes: ['id'],
      },
    ]
  })
    .then(dbUserData => {
      const users = dbUserData.map(user => user.get({ plain: true }));
      // pass a single post object into the homepage template
      res.render('authors', {
        users
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ADD ROUTES THAT ALLOW USERS TO VIEW SINGLE STORIES
//    // THIS SHOULD INCLUDE ALL EXISTING COMMENTS


module.exports = router;