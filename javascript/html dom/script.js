function changeText(){ 
  var newtext=document.getElementById("textinput").value;
    document.getElementById("demo").innerHTML=newtext;
}
function changebackground() {
    var newcolor = document.getElementById("colorinput").value;
    document.body.style.backgroundColor=newcolor;
}