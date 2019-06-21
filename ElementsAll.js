describe('MultipleAll Scenarios', function() {
    //global varaibles    
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton     = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));
    var history_res = element.all(by.repeater('result in memory'));
    //beforeEach -> will be executed before every it block
        beforeEach(function() {
            browser.get('http://juliemr.github.io/protractor-demo/');
         });    
        function op(a,b){
            firstNumber.sendKeys(a);
            secondNumber.sendKeys(b);
            goButton.click();
        }
        it('test1test1', function() {
    
            expect(browser.getTitle()).toEqual('Super Calculator');  
        });
        it('test2test', function() {
            op(2,2);
            op(3,3); 
            op(4,3);      
            expect(history_res.count()).toEqual(3);
        })
    })