let myMap = L.map("map", {
    center: [0, 0],
    zoom: 3
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson').then(responser => responser.json()).then(data => {
    const earthquakes = data;

    earthquakes.features.forEach(feature => {
        const coordinates = feature.geometry.coordinates;
        
        const latitude = coordinates[1];
        const longitude = coordinates[0];
        const magnitude = feature.properties.mag;
        const place = feature.properties.place;

        const marker = L.circleMarker([latitude, longitude], {
            radius: magnitude * 5,
            fillColor: coordinates[2],
            weight: 1,
            opacity: 1,
            fillOpacity: 1
        }).bindPopup(`<b>${place}</b><br />Magnitude: ${magnitude}<br />Latitude: ${latitude}<br />Longitude ${longitude}`);

        marker.addTo(myMap);
    });
})
    .catch(error => console.error('Error fetching earthquake data:', error));