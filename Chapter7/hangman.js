let words = [
    "add",
    "ball",
    "cat",
    "dog",
    "egg",
    "fail",
    "gulp",
    "hot",
    "ice",
    "jump",
    "kick",
    "lion",
    "moon",
    "neck",
    "odd",
    "pop",
    "quil",
    "race",
    "some",
    "tip",
    "ugly",
    "vain",
    "what",
    "xray",
    "yum",
    "zing"
];
//Pick a Random Word
let guesses = 10;
let word = words[Math.floor(Math.random() * words.length)];
//console.log(word);
//Set the Answer Array
let answerArray = [];
for(let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
//the game loop
while (remainingLetters > 0 ){
    //show player progress
    alert(answerArray.join(" "));
    //get quess from player
    let message = `${guesses} tries left`;
    if(guesses == 1) {
        message = "Last try";
    }
    let guess = prompt(`Guess a letter or click Cancel to stop playing. (${message})`);
    if(guess === null) {
        break;
    } else if(guess.length !== 1) {
        alert(`Enter a SINGLE letter please. (${message})`);
    } else {
        //update game with words
        let letters= "";
        guess = guess.toLowerCase();
        let shouldWeDecrement = true;
        for(let j =0; j < word.length; j++){
            if(word[j] === guess){
                if(answerArray[j] == guess) {
                    shouldWeDecrement = false;
                } else {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }
        if(shouldWeDecrement) {
            guesses--;
        }
    
        if(guesses == 0){
            alert("You ran out of guesses!");
            break;
        }
    }
}
//finish game.
//Uaing the varible guess, when will you decrement the guesses?
alert("For this round, the answer is " + word + "!");