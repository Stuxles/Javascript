function uClicked(){
  var answer = "Not a palindrome"
  var str = input.value.toLowerCase();
  str = str.replace(/\s+/g,'');
  console.log(str)
  var compare = str.split('').reverse().join('')
  if(str === compare){
    answer = "Input is a palindrome";
  }
  document.getElementById("output").innerHTML = answer;
}
