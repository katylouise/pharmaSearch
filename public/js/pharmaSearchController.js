pharmaSearch.controller('PharmaSearchController', ['$resource', function($resource) {
  var self = this;
  var searchResource = $resource('http://www.serket.uk/pharmacies/pharmacylist-format');
  self.doSearch = function() {
    self.searchResult = searchResource.get();
  };

}]);