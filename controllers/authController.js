var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/user');

// Go to registration page
exports.register_get = function(req, res) {
  res.render('register');
};

// Post registration
exports.register_post = function(req, res) {
  User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

// Go to login page
exports.login_get = function(req, res) {
  res.render('login');
};

// Post login
exports.login_post = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

// logout
exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};