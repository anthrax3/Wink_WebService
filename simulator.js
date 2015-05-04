var mongoclient = require( './dbconnect.js' ),
    request = require( 'request' ),
    loopcount = 0,
    url = 'http://localhost:1234/update_user_location';

exports.insert_loccation =  function ( req, res ) {
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
};

exports.getinserted_location_list  = function ( req, res ) {
    mongoclient.mongoconnect( function ( err, db ) {
      db.collection( 'maplocation' ).find({},{},function(err,doc){
          doc.toArray(function(err,r){res.json(r);});          
          });
      });
};

function send( callback ) {
    var d;
    var i = 1;
    ( function insertOne() {
        d = '  { "user_uid" : "ID1234567890", "user_map_currentlocation" : { "latitude" : -18.425689 , "longitude" : -12.569891 }} ';
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