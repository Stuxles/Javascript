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

function nthRoot(x, n){
  ng = n % 2;
  if((ng == 1) || x<0)
    x = -x;
  var r = Math.pow(x, 1 / n);
  n = Math.pow(r, n);
  
  if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
    getOut(ng ? -r : r) 
}

function getOut(answer){
  document.getElementById("output").innerHTML = answer;
  console.log(answer)
}

window.onload = function(){
  this.console.log("moet zijn 460")
  addClick(parseInt(220),parseInt(240))
  this.console.log("moet zijn 20")
  subClick(240,220)
  this.console.log("moet zijn 625")
  mulClick(25,25)
  this.console.log("moet zijn 2")
  divClick(8,4)
  this.console.log("moet zijn 5")
  nthRoot(25,2)
  document.getElementById("output").innerHTML = null;
}