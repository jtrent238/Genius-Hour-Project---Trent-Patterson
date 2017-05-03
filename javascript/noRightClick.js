document.onmousedown=click
var times=0
var times2=10
function click() {
if ((event.button==2) || (event.button==3)) {
if (times>=1) { bye() }
alert("No right clicking!!!!!! don't do it again.."); 
times++ } }
function bye() {
alert("I said NO right clicking! click ok to exit LMAO!");
bye() }
