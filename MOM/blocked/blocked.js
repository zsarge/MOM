window.onload = function(){
    document.getElementById("request").addEventListener('click', function(){
        document.getElementById("shade").style.display = "block";
        document.getElementById("popup").style.display = "block";
    });
    document.getElementById("exit").addEventListener('click', function(){
        document.getElementById("shade").style.display = "none";
        document.getElementById("popup").style.display = "none";
    });
};
