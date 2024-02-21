let myMap = L.map("map", {
    center: [0, 5],
    zoom: 2.5
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson').then(responser => responser.json()).then(data => {
    const earthquakes = data;

    earthquakes.features.forEach(feature => {
        const coordinates = feature.geometry.coordinates;
        
        const latitude = coordinates[1];
        const longitude = coordinates[0];
        const magnitude = feature.properties.mag;
        const place = feature.properties.place;
        const depth = coordinates[2];

        const darkness = 1 - (depth / 100);

        const marker = L.circleMarker([latitude, longitude], {
            radius: magnitude * 7,
            fillColor: `rgb(255, ${Math.floor(255 * (1 - (depth / 100)))}, 0)`,
            color: 'black',
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }).bindPopup(`<b>${place}</b><br />Magnitude: ${magnitude}<br />Depth: ${depth}<br />Latitude: ${latitude}<br />Longitude ${longitude}`);

        marker.addTo(myMap);
    });
})
    .catch(error => console.error('Error fetching earthquake data:', error));