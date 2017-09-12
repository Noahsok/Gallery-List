
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

    //console.log(galleryList);
}
function getGalleryName(galleryList) {
  const names = [];
  for (let gallery of galleryList) {
    names.push(gallery.getGalleryName)
  }
  return names;

}

// Learn what is going on here.
function createGalleryListFromMap() {
  const sliced = galleryRows.slice(1)
  const galleryListFromMap = sliced.map(createGalleryFromRow)
  console.log(galleryListFromMap)
}

//ends functions for full list


// these three functions    /   takes row index 0
function createGalleryName(galleryName) {
  return {
  galleryName: galleryName,
  }
}

function createGalleryNameFromLoop(galleryNameRows) {
  const galleryName = [];
  for (let row of galleryNameRows.slice(1)) {
    const name = createGalleryName(row[0])
    galleryName.push(name)
  }
  return galleryName;
}
// end of the three functions for galleryName

// only galleries from specific neighborhood

function createGalleryNameNeighborhood(galleryName, neighborhood) {
  return {
    galleryName: galleryName,
    location: {
      neighborhood: neighborhood,
    }
  }
}

function createGalleryNameNeighborhoodRow(row) {
  return createGalleryNameNeighborhood(row[0], row[2])
}

function createNameNeighborhoodLoop(nameNeighborhoodrow) {
  const galleryNameNeigborhoodrow = [];
  for (let row of nameNeighborhoodrow.slice(1)) {
    const nameNeighborhood = createGalleryNameNeighborhoodRow(row)
    galleryNameNeigborhoodrow.push(nameNeighborhood)
  }
  return galleryNameNeigborhoodrow;
}

function createCityNeighborhood(city, neighborhood) {
  return {
    locationg: {
      city: city,
      neighborhood: neighborhood,
    }
  }
}

function createCityNeighborhoodRow(row) {
  return createCityNeighborhood(row[1], row[2])
}

function createCityNeighborhoodLoop(cityNeighborhoodRow) {
  const cityNeighborhood = [];
  for (let row of cityNeighborhoodRow.slice(1)) {
    const cityNeighbor = createCityNeighborhoodRow(row)
    cityNeighborhood.push(cityNeighbor)
  }
  return cityNeighborhood;
}

const fs = require('fs')
var parse = require('csv-parse')
var inputPath = 'Sheet1.csv';


fs.readFile(inputPath, function (err, fileData) {
  parse(fileData, {trim: true}, function(err, rows) {
    // Your CSV data is in an array of arrys passed to this callback as rows.
    //console.log('rows', rows);

    galleryList = createGalleryListFromLoop(rows);
    //console.log('galleryList', galleryList);
    //galleryName = createGalleryNameFromLoop(rows);
    //console.log('galleryName', galleryName);


    const names = getGalleryName(galleryList);
    console.log(names);
    // pass galleryList to function that will pass it into mongo db
  })
})
