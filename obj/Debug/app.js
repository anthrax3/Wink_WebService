var express = require( "express" ),
    bodyParser = require( "body-parser" ),
    app = express(),
    ObjectID = require( 'mongodb' ).ObjectID,
    //curd = require('./curd.js'),
    request = require( 'request' ),
    mongoclient = require( './dbconnect.js' );

app.use( bodyParser() );

app.post( "/", function ( req, res ) {
    res.send( "Welcome to wink!", 200 );
});


var loopcount = 0;
var url = 'http://localhost:1234/update_user_location';

app.get( "/location/:count", function ( req, res ) {

    if(req.params.count == undefined)
       loopcount = 10;
    else
        loopcount = req.params.count;

    var start = new Date();

    send( function ( r ) {
        var end =  new Date() - start;
        end = end / 1000;
        if ( r )
            res.send( 'successfully inserted , time taken : ' + end + ' seconds' );
        else
            res.send( 'failed to insert , time taken : ' + end + ' seconds');
    });

});

function send( callback ) {
    var d;
    var i = 1;
    ( function insertOne() {
        d = '  { "user_uid" : "ID1234567890", "user_map_currentlocation" : { "latitude": "-18.425689", "longitude" : "-12.5698941" } , "i" : "' + i + '" } ';
        request.post( url, { form: { data: d } }, function ( error, response, body ) {
            if ( !error && response.statusCode == 200 ) {
                if ( i >= loopcount ) {
                    callback( true );
                }
                else {
                    ++i;
                    setTimeout(insertOne, 0);                  
                }
            }
        });
    })();
}


app.get( "/getlist", function ( req, res ) {
    mongoclient.mongoconnect( function ( err, db ) {
      db.collection( 'maplocation' ).find({},{},function(err,doc){
          doc.toArray(function(err,r){res.json(r);});          
          });
      });
});

app.post( "/update_user_location", function ( req, res ) {
    var data = req.body.data;
    data = JSON.parse( data );
    mongoclient.mongoconnect( function ( err, db ) {
        db.collection( 'maplocation' ).insert( { 'mapl_user_id': data.user_uid, 'mpal_map_currentlocation': { 'latitude': data.user_map_currentlocation.latitude, 'longitude': data.user_map_currentlocation.longitude }, 'i': data.i }, function ( err, doc ) {
            res.json( { 'response_status': 'success', 'response_message': 'Inserted successfuly' });
        });
    });
});

//app.post("/uidvalidation",function(req,res){      
//    curd.UidValidation(req,res,function(result){
//        res.json(result);
//    });    
//});

//app.post("/regwithemail",function(req,res){
//   curd.RegisterWithEmail(req,res,function(result){
//       res.json(result);
//   });
//});

app.get( "*", function ( req, res ) {
    res.send( "Page Not Found", 404 );
});

app.listen( "1234" );

global.gstatus = ( global.gstatus ? global.gstatus : { "status": false });
global._gObjectID = ( global._gObjectID ? global._gObjectID : ObjectID );