function uClicked(){
  document.getElementById("output").innerHTML = "";
  var a = 1, b = 0, temp;
  var num = input.value;
  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    document.getElementById("output").innerHTML += "<p>" + b + "</p>";
    num--;
  }
  
}