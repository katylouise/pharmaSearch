describe('PharmaSearchController', function() {
  beforeEach(module('PharmaSearch'));

  var ctrl;
  var httpBackend;
  var pharmacies = [
    [
      "LloydsPharmacy",
      "FJJ79",
      "Wells Close Square",
      "",
      "",
      "Berwick-Upon-Tweed",
      "Northumberland",
      "TD15 1LL",
      "01289 307387"
    ],
    [
      "Castlegate Pharmacy",
      "FRL14",
      "15 Castlegate",
      "Berwick-upon-Tweed",
      "",
      "Northumberland",
      "",
      "TD15 1JS",
      "01289 306 827"
    ]
  ]

  beforeEach(inject(function($controller) {
    ctrl = $controller('PharmaSearchController');
  }));

  beforeEach(inject(function($httpBackend) {
   httpBackend = $httpBackend
   httpBackend
     .when("GET", "http://www.serket.uk/pharmacies/pharmacylist-format")
     .respond(
       { pharmacies: pharmacies }
     );
  }));

  it('initialises with an empty search result and term', function() {
   expect(ctrl.searchResult).toBeUndefined();
   expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a pharmacy', function() {

    it('displays search results', function() {
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult.pharmacies).toEqual(pharmacies);
    })
  })


});