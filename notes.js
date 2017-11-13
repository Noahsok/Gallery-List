galleryName.js:
code to read list of lists:

const headerRow = galleryRows[0] //define headerRow as a constant and gives it a an array (galleryRows) and [0] is the 0-th look up of the array galleryRows

const galleries = []; // define galleries as an array
for (j=1; j < galleryRows.length; j++) { //forloop creates a loop that takes the length of galleryRows starting at 1 and incrimentaly going up in list
  //console.log('galleries', galleries); //console.log reads string galleries array galleries
  var row = galleryRows[j] // variable row is galeryRows array j
  //console.log('row', row) // console.log reads string row to node console
  var galleryList = {}; // newGallery variable  = has its own object
  for (i=0; i < headerRow.length; i++) { // for loop loops through length of headerRow from 0 up
    galleryList[headerRow[i]] = row[i] //newGallery is nested within for loop, first runs i then headerRow


    // Node's require() is the de facto javascript dependency statement.
    var csv = require('csv');


csv.generate({seed: 1, columns: 2, length: 20}, function(err, data){
  // csv create generate,
  csv.parse(data, function(err, data){
    csv.transform(data, function(data){
      return data.map(function(value){return value.toUpperCase()});
    }, function(err, data){
      csv.stringify(data, function(err, data){
        process.stdout.write(data);
      });
    });
  });
});

// add records to the database


on page load:
1. function to get unique cities from mongo
2. create options of cities for the city select element
3. function to get unique neighborhoods for selected city from mongodb
  3a. eventlistener that responds to city select element
4. create options of neighborhood for the neighborhood select element
5. eventlistener that responds to neighborhood select element
6. function to get galleries from selected cities and selected neighborhoods from mongodb
  6a. create options of galleries from mongodb gallery object for galleries select element 











var csv = require('csv');

function myCallback (err, data){
  csv.parse(data, function(err, data){
    csv.transform(data, function(data){
      return data.map(function(value){return value.toUpperCase()});
    }, function(err, data){
      csv.stringify(data, function(err, data){
        process.stdout.write(data);
      });
    });
  });
};

csv.generate({seed: 1, columns: 2, length: 20}, myCallback);



function csvGenerate(baseOptions, callbackFunc) {
  console.log(baseOptions)
  const error = null;
  const data = {body: 'congrats, you called the function'}
  callbackFunc(err, data)
}

csvGenerate({seed:1, columns: 2, length: 20}, myCallback);



csvGenerate(
  {seed:1, columns: 2, length: 20},
  function (err, data) {
    csv.parse(data, function(err, data){
      csv.transform(data, function(data){
        return data.map(function(value){return value.toUpperCase()});
      }, function(err, data){
        csv.stringify(data, function(err, data){
          process.stdout.write(data);
        });
      });
    });
  }
);

const fs = require('fs')
var parse = require('csv-parse')
var inputPath = 'Sheet1.csv';


fs.readFile(inputPath, function (err, fileData) {
  parse(fileData, {columns: false, trim: true}, function(err, rows) {
    // Your CSV data is in an array of arrys passed to this callback as rows.
    galleryList = makeGalleryListFromRows(rows);
  })
})
console.log(galleryList)

function readCallback (err, fileData) {
  console.log(fileData);
}

fs.readFile(inputPath, readCallback);


// breakdown of gallerName.js line for line:


// A function is a set of statementsthat perform a task or calculates a value
// objects

function createGalleryLame(galleryName, city, neighborhood, address) {
  // function name   /   inside() are four Parameters
  const gallery = {};
  //const declaration = list or object?
  gallery.galleryName = galleryName;
  //galleryName is a property of gallery
  gallery.location = {};
  // location is a property it is = to an object (it is a nested object)
  gallery.location.city = city;
  // location is a property of gallery / city is a property of location
  gallery.location.neighborhood = neighborhood;
  // location is a property of gallery / neighborhood is a property of location
  gallery.location.address = address;
  // location is a property of gallery / address is a property of location
  return gallery;
  // return statement ends function execution and specifies value
}

function createGallery(galleryName, city, neighborhood, address) {
  // function name    /   inside() are four Parameters
  return {
    // creates an object
    galleryName: galleryName,
    location: {
      city: city,
      neighborhood: neighborhood,
      address: address
    }
  }
}

function createGalleryFromRow(row) {
  // function createGalleryFromRow has a property called row
  return createGallery(row[0], row[1], row[2], row[3], row[4])
  //returns function createGallery with four row properties
}

function createGalleryListFromLoop(galleryRows) {
  // function createGalleryListFromLoop has a property called galleryRows
  const galleryList = [];
  // constant galleryList = array
  //console.log(sliced);
  const slice = galleryRows.slice(1);
  // create a constant slice that takes method slice and starts galleryRows at 1
  for (let row of slice) {
    // for (let row of galleryRows.slice(1)) {..}
      // slice creates a copy of galleryRows starting at 1.  iterates over the copy of galleryRows
      const gallery = createGalleryFromRow(row)
      // constant declaration gallery = function createGalleryFromRow has property row
      galleryList.push(gallery)
      // push is a method of galleryList that pushes gallery to the end of the array
  }
  return galleryList;
  // return ends function execution of galleryList array
    //console.log(galleryList);
}

// Learn what is going on here.
function createGalleryListFromMap() {
  // function createGalleryListFromMap with no property
  const sliced = galleryRows.slice(1)
  // constant slice that takes method slice and starts galleryRows at 1
  const galleryListFromMap = sliced.map(createGalleryFromRow)
  // constant galleryListFromMap = method map is a method of sliced which creates a new array with property createGalleryFromRow
  console.log(galleryListFromMap)

}


// callback

const fs = require('fs')
// constant fs = require is the JS dependency statement 'fs' is a string or npm module
var parse = require('csv-parse')
// constant parse = require the npm module
var inputPath = 'Sheet1.csv';
// the variable inputPath takes the file Sheet1.csv whih is a string


fs.readFile(inputPath, function (err, fileData) {
  // readFile is a method, function, properties of fs with two peramiters inputPath and anonymous function with two properties err and dileData
  // the anonymous function is the callback
  parse(fileData, {trim: true}, function(err, rows) {
    // in the callback function parse is the method with three paramiters fileData, trim option with a boolean of true,
    // anonymous function that has two properties err, and rows
    // Your CSV data is in an array of arrys passed to this callback as rows.
    //console.log('rows', rows);

    galleryList = createGalleryListFromLoop(rows);
    //constant galleryList is = to the function createGalleryListFromLoop with peramiter rows

    // pass galleryList to function that will pass it into mongo db
    console.log('galleryList', galleryList)
  })
})



// 