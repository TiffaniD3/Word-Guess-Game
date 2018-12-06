// Create an array of Words
var words = ['boston terrier', 'bulldog', 'poodle', 'boxer', 'pug', 'husky', 'chihuahua']
// Choose word randomly
var randNum  = Math.floor(Math.random() * words.length);
var chosenWord = word[randNum];
console.log(chosenWord);
// Create underscores based on length of word
var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++){
        Underscore.push('_');
    }
    return Underscore;
}

//Get users guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keycode);
    if(keyword.indexOf(chosenWord) > -1 {
        console.log(true);
    }

    
});
//Check if Guess is right
//If right push to right array
//If wring push to wrong array
