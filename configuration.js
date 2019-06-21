exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['ExampleSpec.js'],
  specs: ['./TestSpec/banktest.js'],

 // ,seleniumArgs: ['-browserTimeout=60'],
 //  'browserName': 'firefox'
 capablitiles: {'browserName': 'chrome'}
  // multiCapabilities: [{
  // //'browserName': 'internet explorer'},
  //    'browserName': 'firefox'},
  //   { 'browserName': 'chrome'  
  // }]

 // ,chromedriver: 'C:\ProtractorExample\chromedriver.exe'
};