pharmaSearch.controller('MapController', ['$http', function($http) {
  var self = this;
  self.getLatLon = function(firstLine, postcode) {
    $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      params: {
        address: firstLine + " " + postcode
      }
    }).then(function(response) {
      self.Lat = response.data.results[0].geometry.location.lat;
      self.Lon = response.data.results[0].geometry.location.lng;
    })
  };
  self.getLatLon("13 Waldegrave Road", "W5 3HT");
}]);