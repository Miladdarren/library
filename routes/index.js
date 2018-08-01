var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var auth_controller = require('../controllers/authController.js');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.render('index', { title: 'Please login or register before continue', user : req.user });
});

// GET register page
router.get('/register', auth_controller.register_get);

// POST register page
router.post('/register', auth_controller.register_post);

// GET login page
router.get('/login', auth_controller.login_get);

// POST login page
router.post('/login', auth_controller.login_post);

// GET logout
router.get('/logout', auth_controller.logout);

module.exports = router;
