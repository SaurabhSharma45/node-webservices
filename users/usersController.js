var users = {};
var userService = require('./userService')
users.getUsers = function(req,res) {
	var res = userService.getUser(req,res);
}
users.addUser = function(req){
	var res = userService.addUser(req);
	return res;
}
users.deleteUser = function(req){
	var res = userService.deleteUser(req);
	return res;
}

module.exports = users;