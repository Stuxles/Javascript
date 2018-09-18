var alphabet = {
  'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
  'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
  'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
  'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
  'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
  'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
  'y': '-.--',  'z': '--..',  ' ': '/',
  '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
  '9': '----.', '0': '-----', 
}

function uClicked(){
  var index = ""
  var str = input.value;
  var splitString = str.split("");

  index = splitString.map(function(e){
    return alphabet[e.toLowerCase()] || '';
  })
  index = index.join(' ')
  document.getElementById("output").innerHTML = index;
}

function getLetter(letter){
  return letter;
}