
function createGalleryLame(galleryName, city, neighborhood, address) {
  const gallery = {};
  gallery.galleryName = galleryName;
  gallery.location = {};
  gallery.location.city = city;
  gallery.location.neighborhood = neighborhood;
  gallery.location.address = address;
  return gallery;
}

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
  //console.log(sliced);
  for (let row of galleryRows.slice(1)) {
      const gallery = createGalleryFromRow(row)
      galleryList.push(gallery)
  }
  return galleryList;
    //console.log(galleryList);
}

// Learn what is going on here.
function createGalleryListFromMap() {
  const sliced = galleryRows.slice(1)
  const galleryListFromMap = sliced.map(createGalleryFromRow)
  console.log(galleryListFromMap)
}




const fs = require('fs')
var parse = require('csv-parse')
var inputPath = 'Sheet1.csv';


fs.readFile(inputPath, function (err, fileData) {
  parse(fileData, {trim: true}, function(err, rows) {
    // Your CSV data is in an array of arrys passed to this callback as rows.
    //console.log('rows', rows);

    galleryList = createGalleryListFromLoop(rows);
    // pass galleryList to function that will pass it into mongo db
    console.log('galleryList', galleryList)
  })
})
