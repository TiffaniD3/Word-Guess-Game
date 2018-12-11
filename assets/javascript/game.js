$(document).ready(function() {
 // Create an array of Words
 var words = ['scorpion', 'raiden', 'kitana', 'tanya', 'sub-zero', 'reptile', 'mileena']
 // Choose word randomly
 var randNum  = Math.floor(Math.random() * words.length);
 var chosenWord = words[randNum];
 var rightWord = [];
 var wrongWord = [];
 var underScore = [];
 var docUnderScore = document.getElementsByClassName('underScore');

 // Gets Link for Theme Song
 var audioElement = document.createElement("audio");
 audioElement.setAttribute("src", "assets/audio/Mortal Kombat.mp3");

 // Theme Button
 $(".play-button").on("click", function() {
   audioElement.play();
 });
 $(".pause-button").on("click", function() {
   audioElement.pause();
 });  


 // Scoreboard
 var wins = 0;
 var losses = 0;
 var guessesRemaining = 9;


 // Create underscores based on length of word
 var generateunderScore = () => {
    for(var i = 0; i < chosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
 }

 //Get users guess
 document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keycode);
 // if users guess is right  
    if(chosenWord.indexOf(keyword) > -1) {
    // add to right words array
        rightWord.push(keyword);
    // replace underscore with right word  
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
    // check users guess
        if(underScore.join('') == chosenWord) {
            alert('You Win!');
        }   
    }
    else wrongWord.push(keyword); {
        alert('Try again!');
    });
