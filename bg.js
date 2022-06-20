var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
function setGradient(){
    body.style.background = "linear-gradient(to right,"
    + color1.value
    +","
    +color2.value
    +")";
    css.textContent = body.style.background + ";"

}
body.style.background = "linear-gradient(to right,"
    + color1.value
    +","
    +color2.value
    +")";
    css.textContent = body.style.background + ";"
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
body.style.background.addEventListener("onclick",myFunction());
//copy to clipbaoard
// myInput = document.getElementById("myInput");
document.getElementById("myInput").value = css.textContent;
//input.value = body.style.background ;
function myFunction() {
    
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }