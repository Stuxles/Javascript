function uClick(){
  var radios = document.querySelector('input[name="calFunc"]:checked').value;
  
  
  
}

function addClick(){
  document.getElementById("output").innerHTML = (parseInt(inputOne.value) + parseInt(inputTwo.value));
}

function subClick(){
  document.getElementById("output").innerHTML = (parseInt(inputOne.value) - parseInt(inputTwo.value));
}

function mulClick(){
  document.getElementById("output").innerHTML = (parseInt(inputOne.value) * parseInt(inputTwo.value));
}

function divClick(){
  document.getElementById("output").innerHTML = (parseInt(inputOne.value) / parseInt(inputTwo.value));
}