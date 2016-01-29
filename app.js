/*
** Example of a users package
** TODO: make it get the name of the package from a json file 
** so it can be generated from the command line instead of hard coded.
*/

var express        	= require('express');
var router          = express.Router();
var fs 				= require("fs");
var config 			= JSON.parse(fs.readFileSync(__dirname + "/package.json"));

var Users = function(){
	var self 		= this;
	self._name 		= config.name;
	console.log('initializing ' + self._name);

	router.route('/')
	.get(function(req, res){
		res.send('finding '+ self._name);
	});
}

module.exports = {'router': router, 'instance': new Users()};
