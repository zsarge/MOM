
window.onload = function(){
    document.getElementById("enterpin").addEventListener('submit', checkPIN);

    function checkPIN(event){
        event.preventDefault();
        var PIN = document.getElementById("pin").value;
        chrome.storage.sync.get(['pswd'], function(result){
            var pswd = result.pswd;
            if (PIN == pswd){
                window.open('dashboard.html', '_blank');
                chrome.storage.sync.set({loggedin: true});
            }
            else if (pswd == undefined){
                document.getElementById("title").innerHTML = "Do you want to set this as your new PIN?";
                document.getElementById("caption").innerHTML = "This will be the PIN you use to login to MOM in the future. Make sure to remember it.";
                document.getElementById("enterpin").style.display = "none";
                document.getElementById("newpin").style.display = "block";
                document.getElementById("yes").addEventListener('click', function(){
                    chrome.storage.sync.set({pswd: PIN})
                    window.open('dashboard.html', '_blank');
                });
                document.getElementById("no").addEventListener('click', function(){
                    window.close();
                })
            }
            else {
                window.close();
            }
        })
        
    };
};