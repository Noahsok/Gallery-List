var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://Nohsokoloff:noah2385@ds147884.mlab.com:47884/gallery_list';
MongoClient.connect(url, function(err, db ){
  getCityGals(db)
    .then(function(gals) {
      console.log(gals)
    })
    .catch(function(err) {

    })
});

// Return a promise with  the distinct cities
function getCities() {
  MongoClient.connect(url, function(err, db){
    var col = db.collection('galleryList');
    return col.distinct("location.city")
      .then(function(cities){
        db.close()
        return cities;
      })
  })



function getCityGals(db) {
  var col = db.collection('galleryList');
  return col.distinct("location.city" )
    .then(function(cities) {
      console.log(cities);
      return col.distinct("location.neighborhood", {"location.city" : cities[0]})
    })
    .then(function(neigh) {
      console.log(neigh);
      return col.find({"location.neighborhood" : neigh[0]}).toArray();
    })
    .then(function(gals) {
      //console.log(gals);
      db.close()
      return gals;
    })
    .catch(function(err) {
      console.log(err);
    });
};
