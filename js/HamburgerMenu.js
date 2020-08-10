var ham = "";
var list = "";
var lang = "";

function OpenHamburger(OpenClosed) {
    switch (OpenClosed) {
        case "open":
            ham.classList.add("open");
            list.classList.add("open");
        break;

        case "closed":
            ham.classList.remove("open");
            list.classList.remove("open");
            lang.classList.remove("open");
            langDropDown.classList.remove("open");
        break;
    
        default:
            if (ham.classList.contains("open")) {
                ham.classList.remove("open");
                list.classList.remove("open");
                lang.classList.remove("open");
                langDropDown.classList.remove("open");
            } else {
                ham.classList.add("open");
                list.classList.add("open");
            };
        break;
    }
}   

function ChooseLanguage(OpenClosed){
    switch (OpenClosed) {
        case "open":
            lang.classList.add("open");
        break;

        case "closed":
            lang.classList.remove("open");
        break;

        default:
            if (lang.classList.contains("open")) {
                lang.classList.remove("open");
                langDropDown.classList.remove("open");
            } else {
                lang.classList.add("open"); 
                langDropDown.classList.add("open"); 
            }
        break;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    ham = document.getElementById("Hamburger");
    list = document.getElementsByTagName("header")[0].getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
    lang = document.getElementById("language");
    langDropDown = document.getElementsByClassName("nav-dropdown")[0];

    var mqls = [
        window.matchMedia("(max-width: 767px)"),
        window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
        window.matchMedia("(min-width: 922px) and (max-width: 1199px)"),
        window.matchMedia("(min-width: 1200px)")
    ]

    WidthChange();

    for (i = 0; i < mqls.length; i++){mqls[i].addListener(WidthChange);};

    function WidthChange(){
        if (mqls[0].matches) {
            list.classList.add("ham");
        } else if (mqls[1].matches) {
            ham.classList.remove("open");
            list.classList.remove("open");
            list.classList.remove("ham");
        } else if (mqls[2].matches) {
            ham.classList.remove("open");
            list.classList.remove("open");
            list.classList.remove("ham");
        } else if (mqls[3].matches) {
            ham.classList.remove("open");
            list.classList.remove("open");
            list.classList.remove("ham");
        }
    };
})