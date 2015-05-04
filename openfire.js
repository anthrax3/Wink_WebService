var request = request = require( 'request' );

var _openfire = {
    serverUrl : "http://23.253.156.136:9090/plugins/",
    serverName : "wink-app",
    secret : "Ptc0qTcF"    
};

//This example requests the status text of the presence of a user in text format
exports.presense_status = function(req,res) {
    var url = _openfire.serverUrl+'presence/status?jid='+req.param("username")+'@'+_openfire.serverName+'&type=text';        
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
            res.he
        }
    });
};

//The following example adds a user
exports.userservice_add = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=add&secret='+_openfire.secret+'&username='+req.param("username")+'&password='+req.param("password")+'&name='+req.param("name")+'&email='+req.param("email");
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};

//The following example adds a user, adds two shared groups (if not existing) and adds the user to both groups.
exports.userservice_add_groups = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=add&secret='+_openfire.secret+'&username='+req.param("username")+'&password='+req.param("password")+'&name='+req.param("name")+'&email='+req.param("email")+'&groups='+req.param("groups");
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};

//The following example deletes a user and all roster items of the user.
exports.userservice_delete = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=delete&secret='+_openfire.secret+'&username='+req.param("username");
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};

//The following example disables a user (lockout)
exports.userservice_disable = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=disable&secret='+_openfire.secret+'&username='+req.param("username");
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};

//The following example enables a user (removes lockout)
exports.userservice_enable = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=enable&secret='+_openfire.secret+'&username='+req.param("username");
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};

//The following example updates a user
exports.userservice_update = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=update&secret='+_openfire.secret+'&username='+req.param("username")+'&password='+req.param("password")+'&name='+req.param("name")+'&email='+req.param("email");
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};


//The following example adds new roster item with subscription 'both' for user 'kafka'
//http://23.253.156.136:9090/plugins/userService/userservice?type=add_roster&secret=Ptc0qTcF&username=kafka&item_jid=franz@wink-app&name=franz&subscription=3
exports.userservice_add_roster = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=add_roster&secret='+_openfire.secret+'&username='+req.param("username")+'&name='+req.param("name")+'&item_jid='+req.param("item_jid")+'&subscription=3';
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};

//The following example adds new roster item with subscription 'both' for user 'kafka' and adds kafka to roster groups 'family' and 'friends'
//http://23.253.156.136:9090/plugins/userService/userservice?type=add_roster&secret=Ptc0qTcF&username=kafka&item_jid=franz@wink-app&name=franz&subscription=3&groups=family,friends
exports.userservice_add_roster_group = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=add_roster&secret='+_openfire.secret+'&username='+req.param("username")+'&name='+req.param("name")+'&item_jid='+req.param("item_jid")+'&subscription=3&groups='+req.param("groups");
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};

//The following example updates existing roster item to subscription 'none' for user 'kafka'
//http://23.253.156.136:9090/plugins/userService/userservice?type=update_roster&secret=Ptc0qTcF&username=kafka&item_jid=franz@wink-app&name=franz&subscription=0
exports.userservice_update_roster = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=update_roster&secret='+_openfire.secret+'&username='+req.param("username")+'&name='+req.param("name")+'&item_jid='+req.param("item_jid")+'&subscription=0';
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};

//The following example deletes a specific roster item 'franz@kafka.com' for user 'kafka'
//http://23.253.156.136:9090/plugins/userService/userservice?type=delete_roster&secret=Ptc0qTcF&username=kafka&item_jid=franz@wink-app
exports.userservice_delete_roster = function(req,res) {
    var url = _openfire.serverUrl+'userService/userservice?type=delete_roster&secret='+_openfire.secret+'&username='+req.param("username")+'&item_jid='+req.param("item_jid");
    request( url, function ( error, response, body ) {
        if ( !error ) {
            res.send(body);
        }
        else{
            console.log(error);
        }
    });
};



