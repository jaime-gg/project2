const router = require('express').Router();
const { Comment } = require("../../models");

// GET COMMENTS ROUTE --------------------------------------------------------------------------------------------------------------------------

// GET COMMENTS | /API/COMMENTS 
router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// CREATE/DELETE COMMENT ROUTES ----------------------------------------------------------------------------------------------------------------

// CREATE A COMMENT | LOGIN REQUIRED | /API/COMMENTS
router.post('/', withAuth, (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        // USE CURRENT SESSION
        user_id: req.session.user_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});
  
// DELETE A COMMENT | LOGIN REQUIRED | /API/COMMENTS
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;