var word = ""

function uClicked(){
  if (!word){
    word = prompt("Welk woord voor het spel")
    uClicked()
  }else{
    console.log(word);
  }
}