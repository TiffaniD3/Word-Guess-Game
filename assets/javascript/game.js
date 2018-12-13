// Variables
var words = ['scorpion', 'raiden', 'kitana', 'tanya', 'subzero', 'reptile', 'mileena']

// Empty Variables
var randNum = "";
var chosenWord = [];
var rightWord = [];
var wrongWord = [];
var underScore = 0;

// Scoreboard
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

// Game
function Game() {
    randNum = words[Math.floor(Math.random() * words.length)];
    chosenWord = randNum.split("");
    underScore = chosenWord.length;
    for (var i = 0; i < underScore; i++) {
        rightWord.push("_");
    }
    document.getElementById("currentWord").innerHTML = "  " + rightWord.join("  ");

    //console logging 
    console.log(randNum);
    console.log(chosenWord)
    console.log(underScore)
    console.log(rightWord)
}


//Theme Song
var themeSong = document.getElementById("themeSong")

function playAudio() {
    themeSong.play();
    
}
function pauseAudio() {
    themeSong.pause();
}





//variables for audio 
var scorpion = document.getElementById("scorpion");
var raiden = document.getElementById("raiden");
var kitana = document.getElementById("kitana");
var tanya = document.getElementById("tanya");
var subzero = document.getElementById("subzero");
var reptile = document.getElementById("reptile");
var mileena = document.getElementById("mileena");

function aud() {
    //Scorpion Audio & Image
    if (randNum === words[0]) {
        raiden.pause();
        kitana.pause();
        tanya.pause();
        subzero.pause();
        reptile.pause();
        mileena.pause();
        scorpion.play();
        document.getElementById("image").src = "./assets/images/scorpion.jpg";
    }
    //Raiden Audio & Image
    else if (randNum === words[1]) {
        scorpion.pause();
        kitana.pause();
        tanya.pause();
        subzero.pause();
        reptile.pause();
        mileena.pause();
        raiden.play();
        document.getElementById("image").src = "./assets/images/raiden.jpg";
    }
    //Kitana Audio & Image
    else if (randNum === words[2]) {
        scorpion.pause();
        raiden.pause();
        tanya.pause();
        subzero.pause();
        reptile.pause();
        mileena.pause();
        kitana.play();
        document.getElementById("image").src = "./assets/images/kitana.jpg";
    }
    //Tanya Audio & Image
    else if (randNum === words[3]) {
        scorpion.pause();
        kitana.pause();
        subzero.pause();
        reptile.pause();
        raiden.pause();
        mileena.pause();
        tanya.play();
        document.getElementById("image").src = "./assets/images/tanya.jpg";
    }
    //SubZero Audio & Image
    else if (randNum === words[4]) {
        scorpion.pause();
        kitana.pause();
        tanya.pause();
        raiden.pause();
        reptile.pause();
        mileena.pause();
        subzero.play();
        document.getElementById("image").src = "./assets/images/sub-zero.jpg";
    }
    //Reptile Audio & Image
    else if (randNum === words[5]) {
        scorpion.pause();
        kitana.pause();
        raiden.pause();
        subzero.pause();
        tanya.pause();
        mileena.pause();
        reptile.play();
        document.getElementById("image").src = "./assets/images/reptile.jpg";
    }
    //Mileena Audio & Image
    else if (randNum === words[6]) {
        scorpion.pause();
        kitana.pause();
        tanya.pause();
        raiden.pause();
        reptile.pause();
        subzero.pause();
        mileena.play();
        document.getElementById("image").src = "./assets/images/mileena.jpg";
    }
};

//Reset
function reset() {
    guessesRemaining = 9;
    wrongWord = [];
    rightWord = [];
    Game()
}


//Check/compare
function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < underScore; i++) {
        if (randNum[i] == letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {

        for (var i = 0; i < underScore; i++) {
            if (randNum[i] == letter) {
                rightWord[i] = letter;
            }
        }
    }

    else {
        wrongWord.push(letter);
        guessesRemaining--;
    }
    console.log(rightWord);
}


//Final function
//check to see if player won...
var fatality = document.getElementById("fatality")

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (chosenWord.toString() == rightWord.toString()) {
        wins++;
        aud()
        reset()
        document.getElementById("wins").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        aud()
        document.getElementById("image").src = "./assets/images/try-again.png"
        fatality.play();
        document.getElementById("losses").innerHTML = " " + losses;
    }

    document.getElementById("currentWord").innerHTML = "  " + rightWord.join(" ");
    document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
}

//call start game function
Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("guesses").innerHTML = "  " + wrongWord.join(" ");
}


