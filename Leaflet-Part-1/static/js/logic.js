// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Use this link to get the GeoJSON data.
  let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

 
// Function to map depth ranges to colors
function getColorByDepth(depth) {
  if (depth > 90) {
    return '#FF0000'; // Red
  } else if (depth > 70) {
    return '#ffa500'; // Orange
  } else if (depth > 50) {
    return '#FFCC00'; // Orange Yellow  
  } else if (depth > 30) {
    return '#ffff00'; // Yellow  
  } else if (depth > 10) {
    return '#00ff00'; // Green
  } else if (depth > -10) {
    return '#9ACD32'; // Yellow Green
  }
}

// Getting our GeoJSON data
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
              pointToLayer: function(FeatureCollection, latlng) {
                return L.circleMarker(latlng,
              { color: getColorByDepth(FeatureCollection.geometry.coordinates[2]),
                radius: 5*FeatureCollection.properties.mag})
              .bindPopup(
                '<b>Magnitude:</b> ' + FeatureCollection.properties.mag + '<br>' +
                '<b>Time:</b> ' + Date(FeatureCollection.properties.time) + '<br>' +
                '<b>Location:</b> ' + FeatureCollection.properties.place);
           }        
      }).addTo(myMap);
      
   });

var legend = L.control({ position: 'bottomright' });
legend.onAdd = function(map) {
  var div = L.DomUtil.create('div', 'legend'); // Create a <div> element with the 'legend' class
  var grades = [-10, 10, 30, 50, 70, 90]; // Define an array of grades or depth values
  var labels = [];  // Create an empty array to store the legend labels
  var from, to;

 // Iterate through the grades and generate legend entries  
  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];
// Construct each legend entry by appending the color square and label
    labels.push(
      '<span class="color-square" style="background:' + getColorByDepth(from + 1) + '"></span>' +
      from + (to ? '&ndash;' + to : '+')
    );
  }
// Join the labels array with line breaks and assign it to the innerHTML of the div
  div.innerHTML = labels.join('<br>');
  return div;
};

// Add the legend control to the map
legend.addTo(myMap);



 
// // Create a legend control OPTION 2
// var legend = L.control({ position: 'bottomright' });

// // Define the content of the legend
// legend.onAdd = function(map) {
//   var div = L.DomUtil.create('div', 'legend');

//   // Define the legend labels and colors
//   var labels = [
//     { depth: -10, label: '-10 - 10' }, 
//     { depth: 10,  label: '10 - 30' },
//     { depth: 30,  label: '30 - 50' },
//     { depth: 50,  label: '50 - 70' },
//     { depth: 70,  label: '70 - 90' },
//     { depth: 90,  label: '90+' }
//   ];

//   // Iterate through the labels and create legend entries
//   for (var i = 0; i < labels.length; i++) {
//     var label = labels[i];
//     var element = L.DomUtil.create('div', 'legend-item');
//     var colorSquare = L.DomUtil.create('span', 'color-square');
//     colorSquare.style.backgroundColor = getColorByDepth(label.depth+1);
//     element.appendChild(colorSquare);
//     element.innerHTML += label.label;
//     div.appendChild(element);
//   }
//   return div;
// };

// // Add the legend control to the map
// legend.addTo(myMap);

