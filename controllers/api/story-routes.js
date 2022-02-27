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



module.exports = router;