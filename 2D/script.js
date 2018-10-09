var bottles = 99
function uClicked(){
  while(bottles > 1){
    if((bottles % 2) == 1){
      document.getElementById("output").innerHTML += "<p>" + bottles + " bottles of beer on the wall, " + bottles +" bottles of beer." + "</p>";
    }else{
      document.getElementById("output").innerHTML += "<p>Take one down and pass it around, " + bottles + " bottles of beer on the wall.</p>";
    }
    bottles--
  }
  if(bottles == 1){
    document.getElementById("output").innerHTML += "<p>" + bottles + " bottle of beer on the wall, " + bottles +" bottle of beer." + "</p>";
    document.getElementById("output").innerHTML += "<p>Take one down and pass it around, no more bottles of beer on the wall.</p>";
    
    bottles--
  }
  if(bottles == 0){
    document.getElementById("output").innerHTML += "<p>No more bottles of beer on the wall, no more bottles of beer.</p>";
    bottles = 99
    document.getElementById("output").innerHTML += "<p>Go to the store and buy some more, " + bottles +" bottles of beer on the wall.</p>";
  }
}