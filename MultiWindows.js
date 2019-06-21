describe('multiple windows', function(){

    beforeEach(function(){
      browser .ignoreSynchronization=true;
      browser.get('https://skpatro.github.io/demo/links/');
    })
    it('multiple windows handle', function(){

     browser.getTitle().then(function(txt){
         console.log("main window title"+ txt);
     })
     browser.findElement(by.name('NewWindow')).click();
     var windowHandles = browser.getAllWindowHandles();
     var parentHandle, childHandle;

     windowHandles.then(function(handles){
        console.log("length"+ handles.length);
        parentHandle = handles[0];
        childHandle = handles[1];
        var len = handles.length;
        //  for(let i= 0 ;i <= len; i++){
        //     parentHandle = handles[i];
        //     childHandle = handles[i+1];
        // }

       browser.switchTo().window(childHandle).then(function(){
            //child window 
            browser.getTitle().then(function(childText){
            console.log('child win'+ childText);
            browser.close();
            })
            //
      browser.switchTo().window(parentHandle).then(function(){
        browser.getTitle().then(function(parentTxt){
        console.log('parent wind text'+ parentTxt);            
        })
       })      
       })    
     })


    })
})