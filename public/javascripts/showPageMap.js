maptilersdk.config.apiKey = maptilerApiKey;

// console.log(campground.geometry.coordinates)
// console.log(campground)

const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.DARK,
    center: campground.geometry.coordinates,
    zoom: 10 
});

new maptilersdk.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new maptilersdk.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)