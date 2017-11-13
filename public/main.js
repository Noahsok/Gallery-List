

function addNeigh(neighborhood) {
    var newOption = document.createElement('option');
    var newNeigh = document.createTextNode(neighborhood);
    newOption.appendChild(newNeigh);

    var neighSelector = document.getElementById("neighborhoods");
    console.log('neighSelector', neighSelector);
    neighSelector.appendChild(newOption);
}

function addGal(galleries) {
    var newH5 = document.createElement('h5');
    var newGal = document.createTextNode(galleries.galleryName);
    newH5.appendChild(newGal);
    
    // var newH6 = document.createElement('h6');
    // var newAddress = document.createTextNode(galleries.location.address);
    // newH6.appendChild(newAddress);

    var gal = document.getElementById("galleryInfo");
    console.log('galleryInfo', galleryInfo);
    gal.appendChild(newH5);
    // galInfo.appendChild(newH6);
}

function galInfo(gallery) {
    var newInfo = document.createElement('h5');
    var newGalInfo = document.createTextNode(galleryName.location.city.location.neighborhood.location.address);
    newInfo.appendChild(newGalInfo);

    var allGalInfo = document.getElementById("allGalInfo");
    allGalInfo.appendChild(newInfo);
}






document.addEventListener("DOMContentLoaded", function(event) {

    var cities = document.getElementById("cities");
    cities.addEventListener('change', function(eventCiti) {
        console.log(event.target.value);


        fetch("/neighborhoods" + "?city=" + eventCiti.target.value).then(function(res) {
                if(res.ok) {
                    res.json().then(function(json) {
                        console.log(json);
                        json.neighbors;

                        for (let neigh of json.neighbors) {
                            addNeigh(neigh);
                        }
                    
                    })
                    
                } else {
                    throw new Error('err');
                }
            })
            .catch(function(err) {
        
            })

        var neighbors = document.getElementById("neighborhoods");

        while(neighbors.firstChild) {
            console.log(neighbors.firstChild);
            //while or iterate over firstChild/cities of neighbors 
            neighbors.removeChild(neighbors.firstChild);
            
        }


            var galleries = document.getElementById("galleryInfo");
            neighbors.addEventListener('change', function(event) {

            //console.log(event.target.value)
            console.log(galleries);

            fetch("/galleries" + "?city=" + cities.value + "&neighborhoods=" + event.target.value).then(function(res) {
                
                if (res.ok) {
                    res.json().then(function(json) {
                        //console.log('galleries fetch', json);
                        json.gals;

                        for (let gal of json.gals) {
                            console.log('gal', gal);
                            addGal(gal);
                        }
                    })
                } else {
                    throw new Error('err');
                }
            })
            .catch(function(err) {

            })
        
            while(galleries.firstChild) {
                console.log(galleries.firstChild);
                galleries.removeChild(galleries.firstChild);
                }
            })

            var galInfo = document.getElementById("allGalInfo");
            galleries.addEventListener('change', function(event) {

                fetch("/allGalInfo" + "/:galleryId").then (function(res) {
                    if (res.ok) {
                        res.json().then(function(json) {
                            json.fullGal;

                            for (let gal of json.fullGal) {
                                galInfo(gal);

                            }
                        })
                    } else {
                        throw new Error('err');
                    }
                })
                .catch(function(err) {

                })

                while(galleries.firstChild) {
                    galInfo.removeChild(galleries.firstChild);
                }
            })

        })  
    })

    //store data with interactions
