//A lesson in frustration volume 1

//global variables
  var wordArray = ["apple", "banana", "blueberry", "raspberry", "strawberry", "watermelon", "kiwi", "cantaloupe", "pear", "tomato", "blackberry", "cherry"];

  var word = "";
  var letters = [];
  var output = [];
  var wrongLetters = [];
  var num = 0;
  var guessesLeft;
  var losses = 0;
  var wins = 0;

//game start function
  function gameStart() {
    //getting random word from wordArray
    word = wordArray[Math.floor(Math.random() * wordArray.length)]
    //split into letters array
    letters = word.split("");
    //get letters array length
    num = letters.length;

    // console.log(num);
    // console.log(letters);
    // console.log(word)

    //number of guesses, defaulted to 10
    guessesLeft = 10;
    //store wrong letters in array, need to update this so you can't guess the same key twice
    wrongLetters = [];
    output = [];
    //loop to get placeholder _ equal to number of letters in word
    for(var i = 0; i < num; i++) {
      output.push("_")
      //console.log(output)
    }
    //show variables on HTML page, output.join puts the array into a string and adds spaces " "
    document.getElementById("wordAnswer").innerHTML = output.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

  };
    
//checking if the user input letter matches a letter in the word and outputs to replace placeholder
function checkAnswer (letter) {

  var isLetterInWord = false;

  for(var j = 0; j < num; j++) {

    if (letter == word[j]) {
      isLetterInWord = true;
    }
  }
 
  if (isLetterInWord) {
    for(var j = 0; j < num; j++) {
      if (word[j] == letter) {
        output[j] = letter;
        //console.log(output)
      }         
    }
  } else {
      wrongLetters.push(letter);
      guessesLeft--;
  }
  
};

//starting game function
gameStart();

//update
function updateGame() {
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("answersGuessed").innerHTML = wrongLetters;
  document.getElementById("wordAnswer").innerHTML = output.join(" ");
   
  if(letters.toString() == output.toString()) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    play();
  } else if (guessesLeft===0) {
      losses++;
      document.getElementById("losses").innerHTML = losses;
      gameStart();
  }
};

//on key press event listener
document.onkeypress = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  //console.log(userGuess);
  checkAnswer(userGuess);
  updateGame();
};

//display image of the answer if guessed correctly
function play(){
  if (word =="apple"){
    var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeRnv_BBv1jzop1BXj_nrdUHLmzLLxD-5Vivc0oy8iCtVpbiUEQ'>"
    document.querySelector("#picture").innerHTML = picture; 
    gameStart();
  } else if (word == "banana") {
      var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezjubUIBGyVTeGdDwggPprmOXG13R692-k9YAhjXUtOvo0xoA_w'>"
      document.querySelector("#picture").innerHTML = picture;               
      gameStart();
  } else if (word == "blueberry") {
      var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgft58ef7ecOSSvZyFh8yBB-kTGrnX0wyPA7eO0qJFIbbNv69'>"
      document.querySelector("#picture").innerHTML = picture; 
      gameStart();
  } else if (word == "strawberry") {
      var picture = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg'>"
      document.querySelector("#picture").innerHTML = picture; 
      gameStart(); 
  } else if (word == "raspberry") {
      var picture = "<img src='http://www.fruitinhand.com/of-admin/wp-content/uploads/2012/10/fruit_raspberries.jpg'>"
      document.querySelector("#picture").innerHTML = picture;
      gameStart();
  } else if (word == "watermelon") {
    var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5visA6CqtYfldN8eWZRN5kpNhoaOviAppBC36kqSH-sAXIajRQ'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (word == "kiwi") {
    var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWI_Ym_7BsfxIEV9d8dC-OOJlj0Mt127yQBomsfP0WsNY5Keil1w'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (word == "cantaloupe") {
    var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcq0k3vKSx3k7aomi7L6hmyGFoka87pi4lA2fM02HCWcGiYGWGTQ'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (word == "pear") {
    var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkW7pP7iUeo4BKT2EjO8a-r9oQOdz5yeJaXxWhSXomr5UVJ9zV'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (word == "tomato") {
    var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8W9hq2j_-Im16Kf5jGdtedQaA1QHxfDRRGY9lUGf-rdMSb44'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (word == "blackberry") {
    var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82KywKDj9BHpJtpsUpTDodZr_j1tlQflsj9dhD5h-QF0QTaKu'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (word == "cherry") {
    var picture = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX05K0jXVdhvD_K33eBEL-bT-G63WPp2WYo9fuATuUEUYzGRARzg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  }


};
//el fin


  





            