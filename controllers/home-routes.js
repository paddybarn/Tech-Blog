const router = require('express').Router();
const withAuth = require('../utils/auth');

// GET homepage
router.get('/', async (req, res) => {
  res.render('homepage', {
  loggedIn: req.session.loggedIn,
  })
});

router.get('/dashboard', withAuth, async (req, res) => {
  res.render('dashboard', {
  loggedIn: req.session.loggedIn,
  })
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;