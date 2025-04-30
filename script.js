// Initialize the map
var map = L.map('map').setView([41.002333, -73.907389], 17); // Adjusted to new coordinates
// Add a tile layer (Base Map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add AOI Marker (Lamont Forest)
var marker = L.marker([41.002333, -73.907389]).addTo(map)

    .bindPopup("Lamont Forest<br>New York, USA")
    .openPopup();

// Define raster layers
var aspectLayer = L.imageOverlay("data/Clip_rasters/aspect_clipped.tif", [[41.825, -73.98], [41.815, -73.94]]);
var hillshadeLayer = L.imageOverlay("data/hillshade.tif", [[41.825, -73.98], [41.815, -73.94]]);
var carbonLayer = L.imageOverlay("data/carbon_kg_ebk_log_wh_T1-10_1m.tif", [[41.825, -73.98], [41.815, -73.94]]);
var treeLayer = L.imageOverlay("data/ndvi_tree_layer.tif", [[41.825, -73.98], [41.815, -73.94]]); // Placeholder

// Layer Toggle Logic
document.getElementById("aspectLayer").addEventListener("change", function () {
    if (this.checked) { map.addLayer(aspectLayer); }
    else { map.removeLayer(aspectLayer); }
});

document.getElementById("hillshadeLayer").addEventListener("change", function () {
    if (this.checked) { map.addLayer(hillshadeLayer); }
    else { map.removeLayer(hillshadeLayer); }
});

document.getElementById("carbonLayer").addEventListener("change", function () {
    if (this.checked) { map.addLayer(carbonLayer); }
    else { map.removeLayer(carbonLayer); }
});

document.getElementById("treeLayer").addEventListener("change", function () {
    if (this.checked) { map.addLayer(treeLayer); }
    else { map.removeLayer(treeLayer); }
});
