describe('Name of the group', function() {
    it('get test', function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://www.freecrm.com");
        expect(browser.getTitle()).toEqual('Free CRM software for any Business');   
   })  
});
describe('another example testsuite',function(){

    it('another test',function(){
        it('testcas',function(){

            browser.get("https://angularjs.org/");
            element(by.model('yourName')).sendKeys("example");
            var text = element(by.xpath("//div/div/h1[contains(@class,'ng-binding')]"));
            expect(element(by.className('ng-bindling')).getText()).toEqual('Hello example');
            expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
        })
    })
})    