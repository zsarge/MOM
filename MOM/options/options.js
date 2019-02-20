window.onload = function(){
    chrome.storage.sync.get(['loggedin'], function(result){
        var loggedin = result.loggedin;
        if (loggedin){
            //default settings values
            var li1 = 1, //Allow all web content
            li2 = 0, //Enable whitelist
            li3 = 0,
            li4 = 0,
            li5 = 0,
            active = "awc";
            document.getElementById("backicon").addEventListener('click', function(){
                window.history.go(-1);
            });
            chrome.storage.sync.get(['dl'], function(result){
                var dl = result.dl;
                if (dl){
                    document.getElementById("li3").src = "images/disabled.png";
                    li3 = 0;
                }
                else {
                    document.getElementById("li3").src = "images/enabled.png";
                    li3 = 1;
                }
            });
            chrome.storage.sync.get(['wl'], function(result){
                var wl = result.wl;
                if (wl){
                    document.getElementById("li1").src = "images/disabled.png";
                    li1 = 0;
                    document.getElementById("li2").src = "images/enabled.png";
                    li2 = 1;
                }
                else {
                    document.getElementById("li1").src = "images/enabled.png";
                    li1 = 1;
                    document.getElementById("li2").src = "images/disabled.png";
                    li2 = 0;
                }
            });
            document.getElementById("li1").addEventListener('click', fli1);
            document.getElementById("lo1").addEventListener('click', function(){
                document.getElementById("dh1").innerHTML = "Allow all web content";
                document.getElementById("dp").innerHTML = "Enable this if you want to have access to the entire web.";
                document.getElementById("manage").style.display = "none";
                if (li1 == 1){
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/awc/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                }
                else if (li1 == 0){
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/awc/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                };
            });

            document.getElementById("li2").addEventListener('click', fli2);
            document.getElementById("lo2").addEventListener('click', function(){
                document.getElementById("dh1").innerHTML = "Enable whitelist";
                document.getElementById("dp").innerHTML = "Enable this if you want to have only a list of specific accessible websites.";
                document.getElementById("manage").innerHTML = "Manage whitelist";
                document.getElementById("manage").style.display = "inline";
                if (li2 == 1){
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/ew/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                }
                else if (li2 == 0){
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/ew/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                };
            });

            document.getElementById("li3").addEventListener('click', fli3);
            document.getElementById("lo3").addEventListener('click', function(){
                document.getElementById("dh1").innerHTML = "Allow downloads";
                document.getElementById("dp").innerHTML = "Enable this if you want to be able to download files from the internet.";
                document.getElementById("manage").innerHTML = "Manage downloads";
                document.getElementById("manage").style.display = "inline";
                if (li3 == 1){
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/ad/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                }
                else if (li3 == 0){
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/ad/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                };
            });

            document.getElementById("li4").addEventListener('click', fli4);
            document.getElementById("lo4").addEventListener('click', function(){
                document.getElementById("dh1").innerHTML = "Collect browsing habits";
                document.getElementById("dp").innerHTML = "Enable this if you want to receive weekly reports on your browsing habits.";
                document.getElementById("manage").innerHTML = "Manage reports";
                document.getElementById("manage").style.display = "inline";
                if (li4 == 1){
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/cbh/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                }
                else if (li4 == 0){
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/cbh/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                };
            });

            document.getElementById("li5").addEventListener('click', fli5);
            document.getElementById("lo5").addEventListener('click', function(){
                document.getElementById("dh1").innerHTML = "Allow unblock requests";
                document.getElementById("dp").innerHTML = "Enable this if you want to be able to receive requests to unblock websites.";
                document.getElementById("manage").innerHTML = "Manage requests";
                document.getElementById("manage").style.display = "inline";
                if (li5 == 1){
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/aur/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                }
                else if (li5 == 0){
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/aur/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                };
            });

            function fli1(){
                document.getElementById("dh1").innerHTML = "Allow all web content";
                document.getElementById("dp").innerHTML = "Enable this if you want to have access to the entire web.";
                document.getElementById("manage").innerHTML = "";
                document.getElementById("manage").style.display = "none";
                if (li2 == 0){
                    document.getElementById("li2").src = "images/enabled.png";
                    li2++;
                    chrome.storage.sync.set({wl: true});
                }
                else if (li2 == 1){
                    document.getElementById("li2").src = "images/disabled.png";
                    li2--;
                    chrome.storage.sync.set({wl: false});
                };
                if (li1 == 0){
                    document.getElementById("li1").src = "images/enabled.png";
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/awc/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                    li1++;
                    chrome.storage.sync.set({wl: false});
                    
                }
                else if (li1 == 1){
                    document.getElementById("li1").src = "images/disabled.png";
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/awc/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                    document.getElementById("li2").src = "images/enabled.png";
                    li1--;
                    chrome.storage.sync.set({wl: true});
                };
            };

            function fli2(){
                document.getElementById("dh1").innerHTML = "Enable whitelist";
                document.getElementById("dp").innerHTML = "Enable this if you want to have only a list of specific accessible websites.";
                document.getElementById("manage").innerHTML = "Manage whitelist";
                document.getElementById("manage").style.display = "inline";
                if (li1 == 0){
                    document.getElementById("li1").src = "images/enabled.png";
                    li1++;
                    chrome.storage.sync.set({wl: false});
                }
                else if (li1 == 1){
                    document.getElementById("li1").src = "images/disabled.png";
                    li1--;
                    chrome.storage.sync.set({wl: true});
                };
                if (li2 == 0){
                    document.getElementById("li2").src = "images/enabled.png";
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/ew/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                    li2++;
                    chrome.storage.sync.set({wl: true});
                }
                else if (li2 == 1){
                    document.getElementById("li2").src = "images/disabled.png";
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/ew/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                    li2--;
                    chrome.storage.sync.set({wl: false});
                };
            };

            function fli3(){
                document.getElementById("dh1").innerHTML = "Allow downloads";
                document.getElementById("dp").innerHTML = "Enable this if you want to be able to download files from the internet.";
                document.getElementById("manage").innerHTML = "Manage downloads";
                document.getElementById("manage").style.display = "inline";
                if (li3 == 0){
                    document.getElementById("li3").src = "images/enabled.png";
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/ad/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                    chrome.storage.sync.set({dl: false});
                    li3++;
                }
                else if (li3 == 1){
                    document.getElementById("li3").src = "images/disabled.png";
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/ad/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                    chrome.storage.sync.set({dl: true});
                    li3--;
                };
            };

            function fli4(){
                document.getElementById("dh1").innerHTML = "Collect browsing habits";
                document.getElementById("dp").innerHTML = "Enable this if you want to receive weekly reports on your browsing habits.";
                document.getElementById("manage").innerHTML = "Manage reports";
                document.getElementById("manage").style.display = "inline";
                if (li4 == 0){
                    document.getElementById("li4").src = "images/enabled.png";
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/cbh/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                    li4++;
                }
                else if (li4 == 1){
                    document.getElementById("li4").src = "images/disabled.png";
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/cbh/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                    li4--;
                };
            };

            function fli5(){
                document.getElementById("dh1").innerHTML = "Allow unblock requests";
                document.getElementById("dp").innerHTML = "Enable this if you want to be able to receive requests to unblock websites.";
                document.getElementById("manage").innerHTML = "Manage requests";
                document.getElementById("manage").style.display = "inline";
                if (li5 == 0){
                    document.getElementById("li5").src = "images/enabled.png";
                    document.getElementById("details").style.background = "#94E879";
                    document.getElementById("hero").src = "images/aur/enabled.svg";
                    document.getElementById("manage").style.background = "#62CC48";
                    li5++;
                }
                else if (li5 == 1){
                    document.getElementById("li5").src = "images/disabled.png";
                    document.getElementById("details").style.background = "#EA7878";
                    document.getElementById("hero").src = "images/aur/disabled.svg";
                    document.getElementById("manage").style.background = "#CC4646";
                    li5--;
                };
            };
        }
        else {
            chrome.tabs.update(null,{url: chrome.extension.getURL("blocked/blocked.html")});
        }
    })
    
};