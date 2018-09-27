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

function quadClick(one, two){
  let c = one;
  for(let i=1; i<two; i++)
    {
      c = c * one;
    }
  getOut(c)
}

function wortelClick(one){
  getOut(Math.sqrt(one))
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
  this.console.log("moet zijn 625")
  quadClick(25,2)
  this.console.log("moet zijn 5.477225575051661")
  wortelClick(30)
  document.getElementById("output").innerHTML = null;
}