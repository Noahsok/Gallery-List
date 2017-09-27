// const express = require('express');
// const app = express();


// app.get('/', function(req, res) {
//  res.send("Hello World");
// });

// app.listen(3000, function() {
//  console.log('Example app listening on port 3000!');
// });


var mongo = require('mongodb');
var assert = require('assert');

var MongoClient = mongo.MongoClient;
var url = 'mongodb://Nohsokoloff:noah2385@ds147884.mlab.com:47884/gallery_list';

MongoClient.connect(url, (err, db) => {

    assert.equal(null, err);

    db.listCollections().toArray((err, collections) => {

        assert.equal(err, null);

        console.dir(collections);

        db.close();
    });

});
