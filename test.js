
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
    names.push(gallery.galleryName)
  }
  return names;

}

// Learn what is going on here.
function createGalleryListFromMap() {
  const sliced = galleryRows.slice(1)
  const galleryListFromMap = sliced.map(createGalleryFromRow)
  console.log(galleryListFromMap)
}

function filterA(galleryList) {
  const aOnly = [];
  for (let gallery of galleryList) {
    if (gallery.galleryName.indexOf('A') === 0 && gallery.location.neighborhood === 'Lower East Side') {
      aOnly.push(gallery)
    }
  }
  return aOnly;
}

function fullList(galleryList) {
  const slices = []; // empty array with slices of list
  // [[1,2,3], [4,5,6]]
  for (var i = 0; i <= Math.ceil(galleryList.length / 40); i++) {
    // .length is a property of the array meaning in this context it is an integer
    let startIndex = i * 40
    let endingIndex = (i + 1) * 40
    if (endingIndex > galleryList.length) {
      endingIndex = galleryList.length
    }
    let slice = galleryList.slice(startIndex, endingIndex)

    slices.push(slice);
  }
  return slices
}


const fs = require('fs')
var parse = require('csv-parse')
var inputPath = 'Sheet1.csv';


fs.readFile(inputPath, function (err, fileData) {
  parse(fileData, {trim: true}, function(err, rows) {
    // Your CSV data is in an array of arrys passed to this callback as rows.
    //console.log('rows', rows);

    const galleryList = createGalleryListFromLoop(rows);


  //  console.log(galleryList.slice(0, 144));
    //console.log('galleryList', galleryList);
    //galleryName = createGalleryNameFromLoop(rows);
    //console.log('galleryName', galleryName);
    const aOnly = filterA(galleryList);
    // const names = getGalleryName(aOnly);
    // console.log(names);
    // pass galleryList to function that will pass it into mongo db

    const slices = fullList(galleryList);
    console.log(slices);
  })
})
