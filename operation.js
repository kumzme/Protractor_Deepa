describe('Protractor Operation', function(){
  function Add(a, b){
    element(by.model('first')).sendKeys(a).then();
    element(by.model('second')).sendKeys(b).then();
    element(by.id('gobutton')).click().then();
  
  }  
it ('locator all',function(){

    browser.get('http://juliemr.github.io/protractor-demo/');
    Add(7,8);
    Add(2,687);
    Add(88,0);
    Add(3466,88908);
  /* element.all(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(text){
      console.log(text);
    })
  */ 
    element.all(by.repeater('result in memory')).count().then(function(count){
        console.log(count);
      })

    element.all(by.repeater('result in memory')).each(function(item){
        
        item.element(by.css('td:nth-child(3)')).getText().then(function(text){
            console.log(text);
        })
    } ) 
  
})



})