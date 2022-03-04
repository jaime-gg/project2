const router = require('express').Router();
const { User, Story, Comment } = require('../../models');
const withAuth = require('../../utils/with-auth');


// GET STORY ROUTES ----------------------------------------------------------------------------------------------------------------------------

// GET ALL STORIES | /API/STORIES
router.get('/', (req, res) => {
  // RUN FIND ALL METHOD
  Story.findAll({
    // NEWER STORY AT THE TOP OF PAGE
    order: [['created_at', 'DESC']],
    attributes: [
      'id',
      'body',
      'title',
      'created_at'
    ],
    // PULL INFO FROM OTHER TABLES/MODELS
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
    .then(dbStoryData => res.json(dbStoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET A SINGLE STORY | /API/STORIES/:ID
// COULD BE USEFUL FOR VIEW-AUTHOR-ROUTES
router.get('/:id', (req, res) => {
  // RUN FIND_ONE METHOD
  Story.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'body',
      'title',
      'created_at'
    ],
    // PULL DATA FROM COMMENT AND USER MODELS
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
      if (!dbStoryData) {
        res.status(404).json({ message: 'No story found with this id' });
        return;
      }
      res.json(dbStoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ADD / DELETE / EDIT STORIES -----------------------------------------------------------------------------------------------------------------

// CREATE A NEW STORY | /API/STORIES
router.post('/', (req, res) => {
  // RUN CREATE METHOD
  Story.create({
    user_id: req.session.user_id,
    title: req.body.title,
    body: req.body.body
  })
    .then(dbStoryData => res.json(dbStoryData))
    .catch(err => {
      res.status(500).json(err);
      console.log(err);
    });
});

// DELETE STORY | LOGIN REQUIRED | /API/STORIES/:ID
router.delete('/:id', withAuth, (req, res) => {
  // RUN DESTROY FUNCTION USING INPUTTED ID
  Story.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbStoryData => {
      if (!dbStoryData) {
        res.status(404).json({ message: 'No story found with this id' });
        return;
      }
      res.json(dbStoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// EDIT STORY | LOGIN REQUIRED | /API/STORIES/:ID
router.put('/:id', withAuth, (req, res) => {
  Story.update(
    // ADD NEW/EDITED TITLE AND BODY
    {
      title: req.body.title,
      body: req.body.body
    },
    // USE INPUTTED ID
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbStoryData => {
      if (!dbStoryData) {
        res.status(404).json({ message: 'No story found with this id' });
        return;
      }
      res.json(dbStoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;