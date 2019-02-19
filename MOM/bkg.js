window.onload = function(){

    var allowed = ["chrome-extension://","chrome://","google.com/","nbclearn.com/"]; //DO NOT REMOVE chrome-extension:// or chrome://

    chrome.tabs.onUpdated.addListener(function (){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
            var url = tabs[0].url, // the string to check against
                blocked = true
                var length = allowed.length
                while(length--) {
                   if (url.indexOf(allowed[length])!=-1) {
                       console.log("Allowed website")
                        blocked = false;
                   }
                }
                if(blocked){
                    console.log(url + " not allowed");
                    chrome.tabs.update(null,{url: chrome.extension.getURL("blocked/blocked.html")}); //Put the page to redirect to upon blocked website here
                }

        });
    });
};