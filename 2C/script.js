function uClick(){
  var radios = document.querySelector('input[name="calFunc"]:checked').value;
  window[radios](parseInt(inputOne.value),parseInt(inputTwo.value))
}

function addClick(one,two){
  getOut(one + two);
}

function subClick(one,two){
  getOut(one - two);
}

function mulClick(one,two){
  getOut(one * two);
}

function divClick(one,two){
  getOut(one / two);
}

function getOut(answer){
  document.getElementById("output").innerHTML = answer;
}