var btn_open=document.getElementsByClassName("menu-btn")[0];
var menu=document.getElementsByClassName("menu")[0];
var hello=document.getElementById("menu-hello");
var skills=document.getElementById("menu-skills");
var education=document.getElementById("menu-edu");
var portfolio=document.getElementById("menu-port");
var click=0;
btn_open.onclick=function() {
    if(click%2==0) {
        menu.style.transform = "translateX(0%)";
    }
    else {
        menu.style.transform = "translateX(100%)";
    }
    click++;
    hello.onclick=function() {
        menu.style.transform = "translateX(100%)";
        click++;
    };
    skills.onclick=function() {
        menu.style.transform = "translateX(100%)";
        click++;
    };
    education.onclick=function() {
        menu.style.transform = "translateX(100%)";
        click++;
    };
    portfolio.onclick=function() {
        menu.style.transform = "translateX(100%)";
        click++;
    };
};


