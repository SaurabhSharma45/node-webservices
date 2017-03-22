var express = require('express');
var router = express.Router();

var users = require('../users/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.getUsers(req, res);
});
/* ADD user. */
router.post('/', function(req, res, next) {
  	res.send(users.addUser(req));
});

/* Deete Users . */
router.delete('/', function(req, res, next) {
  	res.send(users.deleteUser(req));
});
module.exports = router;
