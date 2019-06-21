describe('Multiple Scenarios', function() {
//global varaibles    
var firstNumber = element(by.model('first'));
var secondNumber = element(by.model('second'));
var goButton     = element(by.id('gobutton'));
var result = element(by.className('ng-binding'));
//beforeEach -> will be executed before every it block
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
     });    

    it('test1', function() {

        expect(browser.getTitle()).toEqual('Super Calculator');  
    });
    it('test2', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(result.getText()).toEqual('3');
    });
    it('test3', function() {
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(27);
        goButton.click();
        expect(result.getText()).toEqual('31');
    })
    it('test4', function() {
        firstNumber.sendKeys(11);
        expect(firstNumber.getAttribute('value')).toEqual('11');
        secondNumber.sendKeys(12);
        expect(secondNumber.getAttribute('value')).toEqual('12');
    })


});
