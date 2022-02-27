const router = require('express').Router();
const { User } = require("../../models");



// CREATE A NEW USER | SIGNUP 
router.post('/', (req, res) => {
  User.create({
    email: req.body.username,
    username: req.body.username,
    password: req.body.password
  })
  .then(dbUserData => {
    // ESTABLISH SESSION VARIABLES
    req.session.save(() => {
      req.session.username = dbUserData.username;
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;

      // PUSH NEW USER DATA
      res.json(dbUserData);
    })
  })
}); 

// CREATE A NEW SESSION | LOGIN 
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
    // CHECK PASSWORD USING AUTHENTICATION FROM THE USER MODEL 
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      // ESTABLISH SESSION VARIABLES
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

// DESTROY CURRENT SESSION | LOGOUT
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  }
  else {
      res.status(404).end();
  }
});

module.exports = router;