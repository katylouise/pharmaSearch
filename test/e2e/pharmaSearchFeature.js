describe('Pharma Search', function() {
  var resultslist = element(by.css('.resultslist'));
  var searchinput = element(by.css('.searchinput'));
  var searchbutton = element(by.css('.searchbutton'));


  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('PharmaSearch');
  });

  it('displays results when user searches', function() {
    browser.get('http://localhost:8080');
    searchinput.sendKeys('Morpeth Pharmacy');
    searchbutton.click();
    expect(resultslist.getText()).toContain("Morpeth Pharmacy")
  });

});
