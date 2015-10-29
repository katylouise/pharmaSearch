describe('Pharma Search', function() {
  var resultColumn = element.all(by.repeater('pharmacy in searchCtrl.searchResult'));
  var resultslist = element(by.css('.resultslist'));
  var searchinput = element(by.css('.searchinput'));
  var searchbutton = element(by.css('.searchbutton'));
  var detailedView = element(by.css('.detailed-view'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('PharmaSearch');
  });

  it('displays results when user searches', function() {
    searchinput.sendKeys('Morpeth Pharmacy');
    searchbutton.click();
    expect(resultslist.getText()).toContain("Morpeth Pharmacy");
  });

  it('displays the full details when pharmacy is clicked', function() {
    searchinput.sendKeys('Morpeth Pharmacy');
    searchbutton.click();
    resultColumn.get(0).click();
    expect(detailedView.getText()).toContain('Morpeth Pharmacy')
  });
});
