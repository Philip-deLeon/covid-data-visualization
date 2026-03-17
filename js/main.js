mapboxgl.accessToken = 'pk.eyJ1IjoicGxlb25uIiwiYSI6ImNtbXR3c2F5bDIyOWEyc29tbDd3ZXc5aWEifQ.uH6hJ7qTyG_0rnhWgexuFg';

const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        zoom: 3, // starting zoom
        center: [-100, 40] // starting center
    }
);

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