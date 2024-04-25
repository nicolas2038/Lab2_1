var map = L.map('map').setView([58.373523, 26.716045], 12);
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'OpenStreetMap contributors'
});

osm.addTo(map);
fetch('tartu_city_districts_edu.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function(feature, layer) {
        if (feature.properties && feature.properties.NIMI) {
          layer.bindPopup(feature.properties.NIMI);
        }
      }
    }).addTo(map);
  });

