describe('PharmaSearchController', function() {
 beforeEach(module('PharmaSearch'));

 var ctrl;

 beforeEach(inject(function($controller) {
   ctrl = $controller('PharmaSearchController');
 }));

 it('initialises with an empty search result and term', function() {
  expect(ctrl.searchResult).toBeUndefined();
  expect(ctrl.searchTerm).toBeUndefined();
 });
});