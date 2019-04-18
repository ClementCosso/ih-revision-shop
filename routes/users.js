const express = require('express');
const router  = express.Router();
const User = require("../models/users");


/* GET list users */
router.get('/', (req, res, next) => {
  User.find()
  .then(users => {
    res.render('index', {users});
  })
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.get('/profile/:idx', (req, res, next) => {
  User.findOne({_id: req.params.idx})
  .then(user => {
    res.render('profile', {user: user});
  })
});

router.post('/create', (req, res, next) => {
  console.log(req.body.username)
  console.log(req.body.password)
  User.create(req.body)
  .then(resultat => {
    res.render('profile', {user: resultat});    
  })
});


module.exports = router;
