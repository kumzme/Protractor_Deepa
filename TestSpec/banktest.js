
describe('BankingProject TestSuite', function() {
    var firstName = element(by.model('fName'));
    var lastName  = element(by.model('lName'));
    var postalCode = element(by.model('postCd'));
    var AddCust    = element(by.className('btn btn-default'));

    function alertText(text){
        let ExpConditions = protractor.ExpectedConditions;
        browser.wait(ExpConditions.alertIsPresent(),4000,'Alert not found');
        let alert = browser.switchTo().alert();
        let alertText = alert.getText();
        alertText.then(function(txt){
         console.log(txt);
        })
        browser.sleep(2000);

        expect(alertText).toContain(text);
        alert.accept();
     }
      beforeEach(function() {
        browser .get('http://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust');
     })

    it('test cases verify the banking flow ',function(){
     firstName.sendKeys('deep');
     lastName.sendKeys('Mahesh');
     postalCode.sendKeys('22121');
     AddCust.click();
    let EC = protractor.ExpectedConditions;
    
    
    browser.sleep(2000);
    alertText("Customer added successfully");
    
   
    element(by.buttonText('Open Account')).click();
    let Customers = element(by.model('custId'));
    let Options   = Customers.all(by.tagName('option'));

    Options.then(function(items){
        console.log(items.length);
        for(let i= 0; i < items.length; i++){
          items[i].getText().then(function(txt){
              console.log(txt);
              if(txt=='deep Mahesh'){
                  console.log('items got...')
                  items[i].click();
              }
          })
          
          
        }
    })
    element(by.model('currency')).$('[value= "Dollar"]').click();
    element(by.buttonText('Process')).click();
    browser.sleep(2000);
    alertText('Account created'); 

   })

    })
    