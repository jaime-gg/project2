const router = require('express').Router();
const { User, Story, Cover } = require('../../models');
const withAuth = require('../../utils/with-auth');

//get all covers
router.get('/', (req, res) => {
  Cover.findAll({
    order: [['created_at', 'DESC']],
    attribute: [
      'id',
      'cover_color',
      'title_color',
      'font_size',
      'font',
      'border_size',
      'border_color',
    ],
    //pulling info from user and story tables
    include: [
      {
        model: User,
        attributes: ['username', 'id'],
      },
      {
        model: Story,
        attributes: ['id', 'title'],
      },
    ],
  })
    .then((dbCoverData) => {
      res.json(dbCoverData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get all covers according to id
router.get('/id', (req, res) => {
  Cover.findOne({
    where: {
      id: req.params.id,
    },
    order: [['created_at', 'DESC']],
    attribute: [
      'id',
      'cover_color',
      'title_color',
      'font_size',
      'font',
      'border_size',
      'border_color',
    ],
    //pulling info from user and story tables
    include: [
      {
        model: User,
        attributes: ['username', 'id'],
      },
      {
        model: Story,
        attributes: ['id', 'title'],
      },
    ],
  })
    .then((dbCoverData) => {
      if (!dbCoverData) {
        res.status(404).json({ message: 'No cover found with this id' });
        return;
      }
      res.json(dbCoverData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create p5 cover
router.post('/', (req, res) => {
  Cover.create({
    story_id: req.session.story_id,
    user_id: req.body.user_id,
    title: req.body.title,
    cover_color: req.body.cover_color,
    title_color: req.body.title_color,
    font: req.body.font,
    font_size: req.body.font_size,
    border_color: req.body.border_color,
    border_size: req.body.border_size,
  })
    .then((dbCoverData) => res.json(dbCoverData))
    .catch((err) => {
      res.status(500).json(err);
      console.log(err);
    });
});

// delete cover
router.delete('/:id', withAuth, (req, res) => {
  Cover.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCoverData) => {
      if (!dbCoverData) {
        res.status(404).json({ message: 'No cover found with this id' });
        return;
      }
      res.json(dbCoverData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//edit cover
router.put('/:id', (req, res) => {
  Cover.update(
    {
      cover_color: req.body.cover_color,
      title_color: req.body.title_color,
      font: req.body.font,
      font_size: req.body.font_size,
      border_color: req.body.border_color,
      border_size: req.body.border_size,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbCoverData) => {
      if (!dbCoverData) {
        res.status(400).json({ message: 'No cover found with this id' });
        return;
      }
      res.json(dbCoverData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
