/* main JavaScript file */



// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
     var firstPTag = document.getElementById("firstParagraph");
     
    // event listener click
    firstPTag.addEventListener("click", firstParagraphClicked);
    
    // event listener hover
    firstPTag.addEventListener("mouseover", firstParagraphHover);
    
    var firstParagraphIsClicked = false;
    var firstParagraphWasHovered = false;
    
    
    
   // Code goes in here
   console.log("App Started...")
    
    
    var myFirstParagraph = "This is my first paragraph.";
    
    
    // Declared Named Function
    function writeToFirstParagraph()
    {
        // For debugging only
        console.log("Executing writeToFirstParagraph");
        
        // Create a reference to a p element of the id of "firstParagraph"
    
    
    firstPTag.textContent = myFirstParagraph;
 
    
    }
    
    // event handler for firstParagraph clicked
    function firstParagraphClicked() {
        if(firstParagraphIsClicked) {
            firstPTag.style.color = "#000000";
            firstParagraphIsClicked = false;
        } else {
            firstPTag.style.color = "#FF0000";
            firstParagraphIsClicked = true;
        }
    }
    
    // event handler for firstParagraph hover
    function firstParagraphHover() {
        if(firstParagraphWasHovered) {
            firstPTag.style.color = "#000000";
            firstParagraphWasHovered = false;
        } else {
            firstPTag.style.color = "#00FF00";
            firstParagraphWasHovered = true;
        }
    }
    
    
    
    /*
    //Declare a variable that points to annoymous function
    var writeToFirstParagraph = function()
    {
        // For debugging only
        console.log("Executing writeToFirstParagraph");
        
        // Create a reference to a p element of the id of "firstParagraph"
        var firstPTag = document.getElementById("firstParagraph");
        
        firstPTag.textContent = "It's alive";

    }
*/

    
    // Execute function
    writeToFirstParagraph();
    
    //console.log(firstPTag);
})();



