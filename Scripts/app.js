/* main JavaScript file */



// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
   // Code goes in here
   console.log("App Started...")
    
    /*
    // Declared Named Function
    function writeToFirstParagraph()
    {
        // For debugging only
        console.log("Executing writeToFirstParagraph");
        
        // Create a reference to a p element of the id of "firstParagraph"
    var firstPTag = document.getElementById("firstParagraph");
    
    firstPTag.textContent = "It's alive";
 
    
    }
    */
    
    //Declare a variable that points to annoymous function
    var writeToFirstParagraph = function()
    {
        // For debugging only
        console.log("Executing writeToFirstParagraph");
        
        // Create a reference to a p element of the id of "firstParagraph"
        var firstPTag = document.getElementById("firstParagraph");
        
        firstPTag.textContent = "It's alive";

    }


    
    // Execute function
    writeToFirstParagraph();
    
    console.log(firstParagraph);
})();



