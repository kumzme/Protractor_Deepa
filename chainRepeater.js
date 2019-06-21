describe('Protractor chain Addition', function(){
 function Add(a,b)
 {
    element(by.model('first')).sendKeys(a).then();
    element(by.model('second')).sendKeys(b).then();

    element(by.id('gobutton')).click();
 } 
 it ('add locators', function(){

    browser.get('http://juliemr.github.io/protractor-demo/');
    Add(5,10);
    Add(5,6);
    Add(105,105);

    element.all(by.repeater("reslut in memory")).each(function(item){
        item.element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        })
    })
 })

})

