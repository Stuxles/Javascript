function uClicked(){
  var answer = "Not a palindrome"
  var str = input.value.toLowerCase();
  if (str.length % 2) {
    var first = str.substring(0,Math.floor(str.length / 2))
    var second = str.substring(Math.ceil(str.length / 2)).split('').reverse().join('')
    if(first === second){
      answer = "Input is a palindrome";
    }
  }
  document.getElementById("output").innerHTML = answer;
}
