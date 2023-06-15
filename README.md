# leaflet-challenge
# Earthquake Map

This project displays earthquake data on a map using Leaflet.js and GeoJSON. The earthquakes are represented as circle markers with varying colors and sizes based on their depth and magnitude.

## Getting Started

1. Clone the repository or download the source code.

2. Open the `index.html` file in a web browser.

## Prerequisites

- Internet connection to load the Leaflet.js library and retrieve GeoJSON data.

## Usage

- The map will be centered on latitude 37.09 and longitude -95.71 with an initial zoom level of 5.

- Tile layer from OpenStreetMap is added as the base layer.

- The GeoJSON data for earthquakes is fetched from the USGS website using the provided link: `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson`.

- Each earthquake is represented as a circle marker on the map. The color and size of the marker depend on the depth and magnitude of the earthquake.

- A legend is displayed in the bottom-right corner of the map, indicating the depth ranges and corresponding colors.

## Functionality

- The `getColorByDepth` function maps the depth values to colors. It returns a color code based on the provided depth value.

- The GeoJSON data is retrieved using `d3.json` and passed to the Leaflet `L.geoJson` function to create a GeoJSON layer. Each feature in the GeoJSON data is mapped to a circle marker with a color and size determined by the depth and magnitude properties.

- A popup is attached to each circle marker, displaying information about the earthquake, including magnitude, time, and location.

## Built With

- Leaflet.js - An open-source JavaScript library for interactive maps.
- D3.js - A JavaScript library for data manipulation and visualization.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Leaflet.js documentation: https://leafletjs.com/
- USGS Earthquake Catalog: https://earthquake.usgs.gov/

