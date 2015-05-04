
//var async = require('asyncawait/async');
//var await = require('asyncawait/await');
var mongoclient = require('./dbconnect.js');
var async = require('async');

var express = require( "express" ),
    app = express(),
    bodyParser = require( "body-parser" );
    
app.use(bodyParser());

function eloop(arg, cb){
    cb(arg);
}

app.get("/test1", function(req,res){   

    var val;

    async.series({
    //Read sheets data rom Sheets
    one: function(callback) {
        eloop(5,function(res){
            val = res;
            callback(null,res);
            });
    },
     two: function(callback) {
        eloop(val,function(res){
            val = ++res/0;
            callback(null,res);
            });
    },

     thr: function(callback) {
        eloop(val,function(res){
            val = ++res;
            callback(null,res);
            });
    }

    },
    //Compute all results
    function(err, results) { 
        console.log(results);
        debugger;
        res.send(200, ('one:'+  results.one +' two:'+ results.two + ' thr:' + results.thr ) );
    });
});


app.get("/test", function(req,res){    
    debugger;    
    var foo = async (function() {
        debugger;
        var resultA = await (
                        mongoclient.mongoconnect(function(err, db) {
                        db.collection( 'maplocation' ).find({},{},function(err,doc){
                                        debugger;
                                    doc.toArray(function(err,r){               
                                        debugger;
                                              return r;                                         
                                        });          
                                    }); 
                        })
             );
        return resultA;        
    });
    var a = foo;
    res.send('Hi test');    
});


app.get("/test3", function(req,res){   
    var a = {
        id : Number,
        name : String
        };

    //a.id = 123;
    //a.name = 'sakthi';
    console.log(typeof a);
    console.log(typeof a.id);
    console.log(typeof a.name);
    
    res.json(a);

});



var db = mongoclient.mongoconnect();
var doc = db.collection('maplocation').find();
var r = doc.toArray();
console.log(r);



//Default request handler
app.get("*", function(req,res){ res.send("hi")});

app.listen( "1234" );


