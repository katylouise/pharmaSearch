pharmaSearch.controller('PharmaSearchController', ['$http', function($http) {
  var self = this;

  self.doSearch = function() {
    $http({
      method: 'GET',
      url: 'http://www.serket.uk/pharmacies/pharmacylist-format'
    }).then(function(response) {
      self.searchResult = response.data.data.searchThroughArray(self.searchTerm)
    })
  };

}]);
