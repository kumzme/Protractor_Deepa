describe('chain Locator',function(){

    it ('chain Locatot test case',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('5').then();
        element(by.model('operator')).element(by.css("option:nth-child(4)")).click();
        element(by.model('second')).sendKeys('59').then();
        element(by.id('gobutton')).click().then();
        element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text)
        {
        console.log(text);
         })
   
       })
})

