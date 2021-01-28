//for the email validation
//Source: https://www.w3resource.com/javascript/form/email-validation.php
function emailValid() {
    var e = document.getElementById("email");
    if ((e.value.endsWith(".edu") || e.value.endsWith(".com") || e.value.endsWith(".EDU") || e.value.endsWith(".COM")) && e.value.includes("@")) {
        document.getElementById("message").innerHTML = "Email successfully recorded";
    } else {
        document.getElementById("message").innerHTML = "Invalid email address.";
    }
}

//for scrolling to the top
//Source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//get the button
var mybutton = document.getElementById("topbutton");
window.onscroll = function () { scrollFunction() };

function scrollFunction(){
    var d = document.body.offsetHeight / 4.0;
    if (document.body.scrollTop >= d || document.documentElement.scrollTop >= d) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//for the overlay display
//Source1: https://www.w3schools.com/howto/howto_css_overlay.asp
//Source2: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
function enlarge(img) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("source").src = img.src;
    document.getElementById("overlay").addEventListener("click", off);
}
function off(event) {
    if (event.target == this) {
        document.getElementById("overlay").style.display = "none";
    }
}
