const router = require('express').Router();
const { User } = require('../../models');

// GET USER ROUTES -----------------------------------------------------------------------------------------------------------------------------

// GET ALL USERS | /API/USERS
router.get('/', (req, res) => {
  // RUN .FIND_ALL() METHOD
  User.findAll({
    // EXCLUDE HASHED PASSWORD
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// USER ACCOUNT ROUTES -------------------------------------------------------------------------------------------------------------------------

// CREATE A NEW USER | SIGNUP
router.post('/', (req, res) => {
  // RUN CREATE METHOD
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
      });
    });
});

// CREATE A NEW SESSION | LOGIN
router.post('/login', (req, res) => {
  // RUN FIND_ONE METHOD | LOGIN TO EXISTING ACCOUNT
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
  } else {
    res.status(404).end();
  }
});


module.exports = router;