const router = require('express').Router();
const { Story } = require("../../models");

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

module.exports = router;