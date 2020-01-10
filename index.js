

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VtYTAwNSIsImEiOiJjazUzbHZldmgwMXVjM2puNmZndGZvODRnIn0.mHwQlDaKmvgJKCcmSZkJZg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

let marker;

const followMe = (pos) => {
    const lng = pos.coords.longitude;
    const lat = pos.coords.latitude;

    map.flyTo({
        center: [lng, lat],
        zoom: 15
    })

    marker = new mapboxgl.Marker();
    marker.setLngLat([lng, lat])
    marker.addTo(map);
}




navigator.geolocation.watchPosition(followMe);