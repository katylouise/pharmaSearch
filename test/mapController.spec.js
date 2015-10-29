describe('MapController', function() {
  beforeEach(module('PharmaSearch'));

  var ctrl;
  var httpBackend;
  var response = {
    data: {
      results: [{
        geometry: {
          location: {
            lat: 51.5,
            lng: -32.5
          }
        }
      }]
    }
  }

  beforeEach(inject(function($controller) {
    ctrl = $controller('MapController');
  }));

  beforeEach(inject(function($httpBackend) {
   httpBackend = $httpBackend;
   httpBackend
     .when("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=45+OBrien+House+E2+0SE")
     .respond(
       { response: response }
     );
  }));

  describe('when searching for a latitude and longitude', function() {
    it('displays search results', function() {
      ctrl.getLatLon("45 OBrien House", "E2 0SE");
      httpBackend.flush();
      console.log("data");
      expect(ctrl.Lat).toEqual(response.data.results[0].geometry.location.lat);
      expect(ctrl.Lon).toEqual(response.data.results[0].geometry.location.lng);
    })
  })
});