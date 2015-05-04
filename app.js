var express = require( "express" ),
    app = express(),
    bodyParser = require( "body-parser" ),    
    ObjectID = require( 'mongodb' ).ObjectID,
//    mongoclient = require( './dbconnect.js' ),
    simulator = require('./simulator.js'),
    winkreq = require('./winkreq.js'),
    webreq = require('./webreq.js'),
    curd = require('./curd.js'),
    openfire = require('./openfire.js');
    
app.use(bodyParser());

app.get("/test", function(req,res){
    res.json(curd.test());
});

//Simulator to insert user location data in loop through http req
app.get("/location/:count", simulator.insert_loccation);

//Get user map location data
app.get("/getlist", simulator.getinserted_location_list);

//Insert user location
app.post("/update_user_location", winkreq.update_user_location);

//Insert chat data
app.post("/chat", winkreq.chat_data);

//Home page request handler
app.get("/", webreq.home);

//Openfire API
app.get("/openfire/presense/status",openfire.presense_status);
app.get("/openfire/userservice/add",openfire.userservice_add);
app.get("/openfire/userservice/add_groups",openfire.userservice_add_groups);
app.get("/openfire/userservice/delete",openfire.userservice_delete);
app.get("/openfire/userservice/disable",openfire.userservice_disable);
app.get("/openfire/userservice/enable",openfire.userservice_enable);
app.get("/openfire/userservice/add_roster",openfire.userservice_add_roster);
app.get("/openfire/userservice/add_roster_group",openfire.userservice_add_roster_group);
app.get("/openfire/userservice/update_roster",openfire.userservice_update_roster);
app.get("/openfire/userservice/delete_roster",openfire.userservice_delete_roster);

//Default request handler
app.get("*", webreq.default);

app.listen( "1234" );

global.gstatus = ( global.gstatus ? global.gstatus : { "status": false });
global._gObjectID = ( global._gObjectID ? global._gObjectID : ObjectID );

console.log("listening on port 1234");