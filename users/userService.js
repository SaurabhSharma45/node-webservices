var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = 'mongodb://127.0.0.1:27017/myDBSAURABH';

var service = {};
service.addUser = function(user) {
    //get the user
    console.log(user);

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('expressJs');
        collection.insertMany([
            { a: 1 ,id: 'a'}, { a: 2,id:'b' }, { a: 3,id:'c' }
        ], function(err, result) {
            console.log("Removed the document with the field a equal to 3");
        });
        console.log("Connected correctly to server");

        db.close();
    });

    return { 'status': 'adduser' }
}
service.getUser = function(req,res) {

    // Use connect method to connect to the Server
      MongoClient.connect(url, function(err, db) {
        var collection = db.collection('expressJs');
       return collection.find({}).toArray(function(err, docs) {
            console.log("Found the following records");
            console.dir(docs);
            return res.send(docs)
        });
        console.log("Connected correctly to server");

        db.close();
    });

    

}
service.deleteUser = function(req) {

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('expressJs');
        collection.deleteOne({ a: 3 }, function(err, result) {
            console.log("Removed the document with the field a equal to 3");
        });
        console.log("Connected correctly to server");
        db.close();
    });

    return { 'status': 'deleteUser' }

}

module.exports = service;
