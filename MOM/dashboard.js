window.onload = function(){
    // Accordion
    document.getElementById("ppl").addEventListener("click", function(){
        myFunction("Demo1");
    });
    document.getElementById("daysenf").addEventListener("click", function(){
        myFunction("Demo2");
    });
    document.getElementById("securitylvl").addEventListener("click", function(){
        myFunction("Demo3");
    });
    function myFunction(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
        } else { 
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
        }
    }
    
    // Used to toggle the menu on smaller screens when clicking on the menu button
    function openNav() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        } else { 
        x.className = x.className.replace(" w3-show", "");
        }
    }
}
