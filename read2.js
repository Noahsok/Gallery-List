//goal of this function: to place a element into html with a specific peramiter from database documents
function addCity(cityName) {
  var newOption = document.createElement("option");
  var newCity = document.createTextNode(cityName);
  newOption.appendChild(newCity);

  var citySelector = document.getElementById("cities");
  citySelector.appendChild(newOption);
}

// iterate over cities, call addCity(cityName) for each city
getCities().then(function(cities) {
  for (let city of cities) {
    addCity(city)
  }
})
.catch(function(err) {
  console.log(err)
})

//import script into page on load
//document.body.onload = addCity();
document.addEventListener("DOMContentLoaded", function(event) {
  
});


eventlistener('change', function() {
  neighborhoods = ['Chelsea', 'LES', 'ETC', 'NoahSneezesAlot']
  createNeighborhoodSelect(neighborhoods)
})


fetch()
  .then(function(neighborhoods) {
    createNeighborhoodSelect(neighborhoods)
  })



function createNeighborhoodSelect(neighborhoods) {
  // Create `<select>` element

  // Create <option> for each neighborhood, in the select created above.

}