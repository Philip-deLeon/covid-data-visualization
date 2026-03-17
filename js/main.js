mapboxgl.accessToken = 'pk.eyJ1IjoicGxlb25uIiwiYSI6ImNtbXR3c2F5bDIyOWEyc29tbDd3ZXc5aWEifQ.uH6hJ7qTyG_0rnhWgexuFg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 3,
    center: [-100, 40],
    projection: 'albers'
});

async function geojsonFetch() { 
    // other operations
}

geojsonFetch();


let response = await fetch('assets/state_data.geojson');
let stateData = await response.json();

map.on('load', function loadingData() {
    // add layer
    // add legend
});