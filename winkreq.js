var mongoclient = require( './dbconnect.js' ),
    mapschema = require('./mapschema.js');

exports.update_user_location =  function ( req, res ) {    
    mongoclient.mongoconnect( function ( err, db ) {
        db.collection( 'maplocation' ).insert( mapschema.map_update_user_location(JSON.parse(req.body.data)) , function ( err, doc ) {
            res.json( { 'response_status': 'success', 'response_message': 'Inserted successfuly' });
        });
    });
};

exports.chat_data = function(req,res){
    mongoclient.mongoconnect( function ( err, db ) {        
        db.collection( 'chat' ).insert( mapschema.map_chat_data(JSON.parse(req.body.data)) , function ( err, doc ) {
            res.json( { 'response_status': 'success', 'response_message': 'Inserted successfuly' });
        });
    });
};

exports.get_around_user = function(req,res){

};
