describe('Protractor Element test suite', function(){
it ('locators', function(){
    //browser.executeScript("document.body.style.zoom='90%';");
    /*browser.waitForAngularEnabled(false); for non angular application
    browser.get("http://www.google.com");
    */
   browser.get('http://juliemr.github.io/protractor-demo/');
   element(by.model('first')). sendKeys("5").then()
   element(by.xpath("//select[@ng-model='operator']/option[@value='MULTIPLICATION']")).click().then()
   element(by.model("second")).sendKeys("59").then();
   element(by.id("gobutton")).click();
   expect(element(by.css("h2[class='ng-binding']")). getText()). toBe('295');//jasmine will promise resolve

   element(by.css("h2[class='ng-binding']")). getText().then(function(text){
   console.log(text);
   
   });

 })
  
})