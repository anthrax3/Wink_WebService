// # passwordChecker.js
// Check a password for an user account
// 

var exec = require('child_process').exec;
var q = require("querystring");

module.exports = function(req, resp, next) {

	// try to get the arguments.
	try {
		var user = req.body.user;
		var host = req.body.host;
		var pwd = req.body.pass;
	}
	// if it fails, throw an error
	catch (e) {
		resp.send(400, e.toString());
		return;
	}

	// construct the command
	// note: the concurrent flag is used in case more than one request comes in
	// at the same time
	var cmd = "ejabberdctl check-password " + user + " " + host
			+ " " + pwd;
	console.log(cmd);

	// send the response
	// return resp.send(200, {
	// response : true
	// });

	// try to do the command
	try {
		// execute the command
		var child = exec(cmd, function(err, stdout, stderr) {
			// create the default output
			var out = {
				response : true
			};
			// if the error is set, the response is modified
			if (err) {
				out.response = false;
			}
			// send the response
			resp.send(200, out);
		});
	}
	// if it fails, throw an error
	catch (e) {
		resp.send(400, e.toString());
	}
};
