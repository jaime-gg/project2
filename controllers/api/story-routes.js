const router = require('express').Router();
const { User, Story, Comment } = require("../../models");

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

module.exports = router;