describe('Protractor DropDown', function(){

function calc(a, b,c){
    element(by.model('first')).sendKeys(a).then();

    element.all(by.tagName('option')).each(function(item){
        
        item.getAttribute('value').then(function(values){
          if(values ==c){
            item.click();
          }
        })

    } ) 

    element(by.model('second')).sendKeys(b).then();
    element(by.id('gobutton')).click().then();
  
  }  
it ('locator all',function(){

    browser.get('http://juliemr.github.io/protractor-demo/');
    calc(7,8,"MULTIPLICATION");
    calc(9,10,"ADDITION");

element.all(by.repeater('result in memory')).each(function(item){

    item.element(by.css('td:nth-child(3)')).getText().then(function(text){
        console.log(text);
    })
})

  /* element.all(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(text){
      console.log(text);
    })
  */ 
    element.all(by.repeater('result in memory')).count().then(function(count){
        console.log(count);
      })

  
})
})