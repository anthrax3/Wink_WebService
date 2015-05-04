
var mongoclient = require('./dbconnect.js'),
    Sync = require('sync');

exports.test = function(){
    debugger;
    var rd;
    Sync(function(){
        debugger;
        var fun = mongoclient.mongoconnect( function ( err, db ) {
        db.collection( 'maplocation' ).find({},{},function(err,doc){
          doc.toArray(function(err,r){
                debugger;
                     return r;           
                });          
            });
        });
        debugger;
        rd = fun.sync(null);


        });
debugger;
    return rd;
};

exports.GetProfessionId = function (p) {
   mongoclient.mongoconnect(function(err, db) {
        db.collection('profession').findOne( { 'prof_profession': p }, { '_id': 1 }, function ( err, doc ) {
            if ( err ) throw err;
            if(doc == null)
                return null;
            else
                return doc._id;
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

