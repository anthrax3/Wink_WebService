// # ejabberd-connector.js
// Main server application exported by npm.

var express = require('express');
var accountAdder = require("./accountAdder.js");
var accountChecker = require("./accountChecker.js");
var passwordChecker = require("./passwordChecker.js");
var unregister = require("./unregister.js");
var bodyParser = require( "body-parser" );
var app = express();

app.use(bodyParser());

app.get( "/", function ( req, res ) {
    res.send( "Welcome to wink!", 200 );
});

app.post("/register", accountAdder);
app.post("/checkaccount", accountChecker);
app.post("/checkpassword", passwordChecker);
app.post("/unregister", unregister);

app.listen("1234");

console.log("listening on 1234");