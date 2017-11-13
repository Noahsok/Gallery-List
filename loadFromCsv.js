// these three functions    /   for peramiters
function createGallery(galleryName, city, neighborhood, address) {
    return {
      galleryName: galleryName,
      location: {
        city: city,
        neighborhood: neighborhood,
        address: address
      }
    }
  }
  
  function createGalleryFromRow(row) {
    return createGallery(row[0], row[1], row[2], row[3], row[4])
  }
  
  function createGalleryListFromLoop(galleryRows) {
    const galleryList = [];
    for (let row of galleryRows.slice(1)) {
        const gallery = createGallery(row[0], row[1], row[2], row[3], row[4])
        galleryList.push(gallery)
  
    }
    return galleryList;
  }
  
  const MongoClient = require('mongodb').MongoClient;
  
  var ObjectId = require('mongodb').ObjectID;
  
  function galleryListToMongo(galleryList) {
    MongoClient.connect('mongodb://Nohsokoloff:noah2385@ds147884.mlab.com:47884/gallery_list', function(err, db) {
      var col = db.collection('galleryList');
      col.insertMany(galleryList, function(err, r) {
        db.close();
      })
    })
  };
  
  
  
  const fs = require('fs')
  var parse = require('csv-parse')
  var inputPath = 'Sheet1.csv';
  
  
  fs.readFile(inputPath, function (err, fileData) {
    parse(fileData, {trim: true}, function(err, rows) {
      // Your CSV data is in an array of arrys passed to this callback as rows.
      //console.log('rows', rows);
      if(err) {
          throw new Error(err);
      }
  
      const galleryList = createGalleryListFromLoop(rows);
      //const slices = fullList(galleryList);
      
      galleryListToMongo(galleryList);

      
  
    })
  })