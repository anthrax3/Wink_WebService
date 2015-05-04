var MongoClient = require("mongodb").MongoClient;
var dburl = "mongodb://localhost:27017/wink_test";
var myDb;

exports.mongoconnect = function ( callback ) {
    if ( myDb === undefined ) {
       MongoClient.connect(dburl, {native_parser:true}, function(err, db) {
            if ( err ) { return callback( err, db ) };
            myDb = db;
            callback( null, db );
        });
    } else {
        callback( null, myDb );
    }
};