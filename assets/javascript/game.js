var animals = [  
        "shark", 
        "dolphin", 
        "blue whale",
        "crab",
        "lobster",
        "shrimp",
        "coral",
        "eel",
        "squid",
        "jellyfish",
        "octopus",
        "starfish",
        "sea turtle",
        "tuna"
    ];

 
  var chosenWord = "";
  var lettersInChosenWord = [];
  var numBlanks = 0;
  var correctGuesses = []; 
  var wrongGuesses = []; 
  
  var winCounter = 0; 
  var lossCounter = 1;
  var numGuesses = 10;
  
  function startGame() {

    wrongGuesses = []; 
    numGuesses = 10;
    correctGuesses = []; 
    

    chosenWord = animals[Math.floor(Math.random() * animals.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;

    for(var i=0; i < numBlanks; i++){
        correctGuesses.push("_");
    }
    document.getElementById("word_bank").innerHTML = correctGuesses.join(" ");
    document.getElementById("guesses_left").innerHTML = numGuesses;
      
  }


  function checkLetters(letter){
    var letterInWord = false;

    for(var i=0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;
        }
      }
    if(letterInWord){
        for(i =0; i <numBlanks; i++){
            if(chosenWord[i] === letter){
            correctGuesses[i] = letter;  
        }    
        }

    }else{
        numGuesses --;
        wrongGuesses.push(letter)
    }
  }


  function roundComplete(){
    document.getElementById("word_bank").innerHTML = correctGuesses.join(" ");
    document.getElementById("guesses_left").innerHTML = numGuesses;
    document.getElementById("letters_guessed").innerHTML = wrongGuesses.join(" ");

    if(lettersInChosenWord.join(" ") === correctGuesses.join(" ")){
        winCounter++;
        alert("You win!");
        document.getElementById("win_counter").innerHTML = winCounter;
        startGame();
    }else if(numGuesses === 0){
        document.getElementById("loss_counter").innerHTML = lossCounter++;
        document.getElementById("letters_guessed").innerHTML = "";
        alert("You don't have any more guesses");
        startGame();
    }
  }


  startGame();
  document.onkeyup = function(event) {  
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed)
    roundComplete();

  }
