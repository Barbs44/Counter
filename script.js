var zero = document.querySelector("#zero");
var lc = document.querySelector("#lc");
var ac = document.querySelector("#ac");

var x = 0;
ac.addEventListener("click",function () {
    x++;
    zero.innerHTML=x;
    zero.style.color="F1FF00";
})

lc.addEventListener("click", function(){
    x--;
    zero.innerHTML=x;
    if (x < 0){
       zero.style.color="red";
    }
})
var rstBtn = document.querySelector("#rst").addEventListener("click", function() {
    x=0;
    zero.innerHTML=x;
})