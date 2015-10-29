var lat;
var lon;

function getLatLong(firstLine, postcode) {
  $.get('https://maps.googleapis.com/maps/api/geocode/json', { address: firstLine + " " + postcode }, function(response) {
      lat = response.results[0].geometry.location.lat;
      lon = response.results[0].geometry.location.lng;
      google.maps.event.addDomListener(window, 'load', initMap(lat, lon));
  })
}

function initMap(lat, lon) {
  var latLong = { "lat": lat, "lng": lon };
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(latLong),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var marker = new google.maps.Marker({
    position: latLong,
    title: 'Pharmacy'
  });
  var map = new google.maps.Map(mapCanvas, mapOptions);
  marker.setMap(map);
}



getLatLong("13 Waldegrave", "W5 3HT");
