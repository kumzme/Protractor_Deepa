describe('test suite',function(){

 it ('test case', function()
 {
  browser.get('https://posse.com');
  element(by.model('userInputQuery')).sendKeys("ocean");
  browser.actions().mouseMove(element(by.model('locationQuery')).sendKeys("virgina")).perform();
  browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
  browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
      browser.sleep(2000);
  })

 })

})

