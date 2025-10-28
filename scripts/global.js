const WebMap = {
    isMobile: false,
    isFinite: isFinite(),
    isNaN: isNaN(),
    window: window,
    Window: Window,
    service: null,
    getElementById: window.document.getElementById,
    addEventListener: function(item, event="", Function=function(){}) {
        return item.addEventListener(event, Function);
    }
}

const jce = {
    isMenuOpen: false,
}

WebMap.service = jce;

function updateMenu(isMenuOpen) {
    if (isMenuOpen) {
        window.document.getElementById("header").classList.add("open");
        window.document.getElementById("innerwrap").classList.add("open");
        window.document.getElementById("toggle-menu").textContent = "^";
    } else {
        window.document.getElementById("header").classList.remove("open");
        window.document.getElementById("innerwrap").classList.remove("open");
        window.document.getElementById("toggle-menu").textContent = "v";
    }
}

function mobileHandler() {
    console.log("calling handler");
    console.log(window.innerWidth)
    if (window.innerWidth > 1300) {
        console.log("returning from handler.");
        return;
    }
    console.log("continuing handler");
    if(!WebMap.isMobile) WebMap.isMobile = true;
    WebMap.service.isMenuOpen = !WebMap.service.isMenuOpen;
    updateMenu(WebMap.service.isMenuOpen);
}

const thing = WebMap.addEventListener(WebMap.window.document, "DOMContentLoaded", function() {console.log("Page Loaded.")});
console.log(thing);