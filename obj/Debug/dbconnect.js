var MongoClient = require("mongodb").MongoClient;
var dburl = "mongodb://localhost:27017/wink_test";
var myDb;

exports.mongoconnect = function ( callback ) {
    if ( myDb === undefined ) {
       MongoClient.connect(dburl, {native_parser:true}, function(err, db) {
            if ( err ) { return callback( err ) };
            myDb = db;
            callback( null, db );
        });
    } else {
        callback( null, myDb );
    }
};





//var Db = require('mongodb').Db;
//var Connection = require('mongodb').Connection;
//var Server = require('mongodb').Server;
////the MongoDB connection
//var connectionInstance;

//module.exports = function( ){ //callback) {
//  //if already we have a connection, don't connect to database again
//  //if (connectionInstance) {
//  //  callback(null,connectionInstance);
//  //  return;
//  //}

//  var db = new Db('wink_test', new Server("localhost", "27017", { auto_reconnect: true, native_parser: true }));
//  db.open(function(error, databaseConnection) {
//    //if (error) throw new Error(error);
//    //if (error)  callback(error,null);
//    //else {
//        connectionInstance = databaseConnection;
//      //  callback(null,databaseConnection);
//      return databaseConnection
//    //}
//  });
//};