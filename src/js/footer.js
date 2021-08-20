var modalFooter = document.getElementById('myModal');
var btn = document.getElementById("footerBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick=function(){
    modalFooter.style.display = "block";
}
span.onclick = function() {
    modalFooter.style.display = "none"
}

window.onclick = function(event) {
    if  (event.target == modalFooter) {
        modalFooter.style.display = "none";
    }
}
