describe('Protractor baby steps testsutite',function() {
//first parameter- Test Suite name, 2nd parameter-function all tests(it blocks);	
 
 it('Open Angular js Website testcase', function(){
	 
 // code
   browser.get('https://angularjs.org');

   browser.get('http://juliemr.github.io/protractor-demo/').then(function()
   {
    
    console.log('last step in this example');
    
   })
   
 });
 
 it('second testcase', function(){
	 
 });
	
});