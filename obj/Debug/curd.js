
var schema = require( './schema.js' );
var mapSchema = require( './MapSchema.js' );
var dbschema = require( './dbschema.js' );
var mongoclient = require('./dbconnect.js');
//var sync = require('synchronize');

exports.UidValidation = function ( req, res, callback ) {
    var data = req.body.data;
    var result = schema.uidvalidation();
    data = JSON.parse( data );
     mongoclient.mongoconnect( function(err, db) {
            db.collection('users').findOne( { "user_userid": data.user_userid }, { "_id": 1 }, function ( err, doc ) {
                if ( err ) throw err;
                if ( doc == null || doc == undefined ) {  
                    result.response_status = false;
                    result.response_message = "User doesn't exist";
                    // res.json(result);
                    callback( result );
                }
                else {
                    result.response_status = true;
                    result.response_message = "User exist";
                    //res.json(result);
                    callback( result );
                }
            });
    });
};

exports.RegisterWithEmail = function ( req, res, callback ) {
    var data = req.body.data;
    var result = schema.uidvalidation();
    data = JSON.parse( data );
    var insertdata = mapSchema.users( data, dbschema.users() );
    mongoclient.mongoconnect( function(err, db) {
        db.collection('users').insert( insertdata, function ( err, doc ) {
            if ( err ) throw err;
            if ( doc == null || doc == undefined ) {
                result.response_status = false;
                result.response_message = "User doesn't exist";
                //res.json(result);
                callback( result );
            }
            else {
                result.response_status = true;
                result.response_message = "User exist";
                //res.json(result);
                callback( result );
            }
        });
    });
};



exports.GetProfessionId = function ( p, callback ) {
   mongoclient.mongoconnect(function(err, db) {
        db.collection('profession').findOne( { 'prof_profession': p }, { '_id': 1 }, function ( err, doc ) {
            if ( err ) throw err;
            if(doc == null)
                callback(null);
            else
                callback(doc._id);
        });      
   });
};

exports.GetSex = function ( s ) {
  mongoclient.mongoconnect( function(err, db) {
        db.collection('lookup').findOne( { $and: [{ 'lkup_familytype': 'users' }, { 'lkup_family': 'sex' }, { 'lkup_value': s }] }, { '_id': 1 }, function ( err, doc ) {
            if ( err ) throw err;
            if(doc == null)
                return null;
            else
                return doc._id;
        });
  });
};

exports.GetRelation = function ( r ) {
   mongoclient.mongoconnect( function(err, db) {
        db.collection('lookup').findOne( { $and: [{ 'lkup_familytype': 'users' }, { 'lkup_family': 'relationship' }, { 'lkup_value': r }] }, { '_id': 1 }, function ( err, doc ) {
            if ( err ) throw err;
            if(doc == null)
                return null;
            else
                return doc._id;
        });
   });
};


exports.GetProfilePicUrl = function ( d ) {

};