const express = require('express');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;
const app = express();



app.use(bodyParser.json())
app.set('view engine', 'ejs') 



const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://Nohsokoloff:noah2385@ds147884.mlab.com:47884/gallery_list';

function getCities(db) {
    var col = db.collection('galleryList');
    return col.distinct("location.city")
  } 

  function getNeighbors(db, city) {
    var col = db.collection('galleryList');
    return col.distinct("location.neighborhood", {"location.city" : city})
  }

//Retrieves galleryList from database
//@param {object} db
//@param {object} city
//@param {object} neighborhoods
//returns a cursor to access document then returns array that contains all of the documents
  function getGalleries(db, city, neighborhoods) {
    var col = db.collection('galleryList');
    return col.find({"location.neighborhood" : neighborhoods, "location.city" : city}).toArray(); 
    
  }

  function getGalleryPage(db, id) {
    var col = db.collection('galleryList');
    var o_id = new ObjectId(id);
    return col.find({"_id" : o_id}).toArray();
    
  }


MongoClient.connect(url, function(err, db) {

//not: want to use getcities to populate cities for the ejs template (will go into ejs template)

  app.get('/', function(req, res) {
    getCities(db).then(function(cities) {
      console.log(cities)
      data = cities
      res.render('index.ejs', {cities: data});
    })
    .catch(function(err) {
      throw new Error(err);
      console.log(err);
    })
  })

  app.get('/neighborhoods', function(req, res) {
    getNeighbors(db, req.query.city).then(function(neighbors) {
      //console.log(req);
      console.log(neighbors)
      data = neighbors
      
      res.send( {neighbors: data} );
    })
    .catch(function(err) {
      throw new Error(err);
    })

  })

  app.get('/galleries', function(req, res) {
    
    getGalleries(db, req.query.city, req.query.neighborhoods).then(function(gals) {
      
      data = gals;

      res.send({gals : data} );
    })
    .catch(function(err) {
      throw new Error(err);
    })
  })

  app.get('/allGalInfo/:galleryId', function(req, res) {
    
    getGalleryPage(db, req.params.galleryId).then(function(fullGal) {
      console.log(req.params.galleryId);
      res.send({fullGal: fullGal});
    

    })
    .catch(function(err) {
      throw new Error(err);
    })
  })

  app.use(express.static('public'))

  app.listen(3000, function() {
    console.log('listen on 3000');
  })

});


