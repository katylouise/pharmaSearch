describe('Pharma Search', function() {
  var resultslist = element(by.css('.resultslist'));

 it('has a title', function() {
   browser.get('http://localhost:8080');

   expect(browser.getTitle()).toEqual('PharmaSearch');
 });

it('displays all results when no search term is entered', function() {
  browser.get('http://localhost:8080');
  expect(resultslist.getText()).toContain("LloydsPharmacy")
})

});
