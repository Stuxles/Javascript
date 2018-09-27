var word = null
var wordArray = []
var answerArray = []
var usedLetters = []
var tries = 0
var score = 0

function uClicked(){
  //set word commands
  if(!word){
    //set input value to word
    input.value = input.value.toLowerCase()
    word = input.value;
    //split word to array
    wordArray = word.split("")
    //set word length to score
    score = wordArray.length
    //fill answerarray with underscores depending on word length
    for (var i = 0; i < wordArray.length; i++) {
      answerArray[i] = "_";
    }

    //change button text to guess letter
    document.getElementById("clickButton").innerHTML = "Guess letter"
    //make underscores visible to user
    document.getElementById("output").innerHTML = answerArray.join(" ")
    //limit input field to 1 character
    document.getElementById("input").maxLength = "1";
    //empty text from input field
    document.getElementById("input").value = "";
  }

  //set letter commands
  else{
    //check if length of input is longer than one in case of html failure
    if(input.value.length > 1){
      //alert user about letters
      window.alert("Too many letters");
    }
    //code when there is 1 character goes here
    else{
      //check if the letter hasn't already been used
      if(!usedLetters.includes(input.value)){
        //add letter to array with used letters
        usedLetters.push(input.value)
        //check if letter inputted is in word
        if(wordArray.includes(input.value)){
          //change underscores of correctly guessed letter to correct letter
          for (var i = 0;i < wordArray.length; i++){
            if(wordArray[i] == input.value) {
              answerArray[i] = input.value
            }
          }
          //check if almost all letters have been guessed and send win message
          if(score <= 1){
            window.alert("You win");
            location.reload();
          }else{
            score--
          }
        }else{
          //check if playerr has guessed the maximum times and shows lose message
          if(tries >= 6){
            tries++
            window.alert("You lose");
          }else{
            tries++
          }
          
        }
      }else{
        //alert player the letter has already been guessed
        window.alert("Letter already guessed");
      }
      //update the current correct letters
      document.getElementById("output").innerHTML = answerArray.join(" ")
      //update used letters
      document.getElementById("guessed").innerHTML = usedLetters.join(" ")
      //update image of hangman
      document.getElementById("hangImg").src = "imgs/Hangman-" + tries +".png";
    }
  }
}