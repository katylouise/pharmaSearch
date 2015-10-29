describe('Array', function() {
  var mockArray = [
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
    ],
    [
      "Boots",
      "FQ801",
      "60-68 Marygate",
      "",
      "",
      "Berwick Upon Tweed",
      "",
      "TD15 1BN",
      "01289 306036"
    ],
    [
      "Fake Pharmacy",
      "AW123",
      "50 Commercial Street",
      "",
      "Boots",
      "London",
      "HG1 UT7",
      "033455878989"
    ]
  ];

    it('returns an array containing the results matching the search terms', function() {
      var searchTerm = 'Boots';
      expect(mockArray.searchThroughArray(searchTerm)).toEqual([mockArray[2], mockArray[3]]);
    });
});
