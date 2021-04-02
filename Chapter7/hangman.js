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
    "over",
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
console.log(word);
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
    let guess = prompt("Guess a letter or click Cancel to stop playing.");
    if(guess === null) {
        break;
    } else if(guess.length !== 1) {
        alert("Enter a SINGLE letter please.");
    } else {
        //update game with words
        let letters= "";
       for(let j =0; j < word.length; j++){
           
           if(word[j] === guess.toLowerCase()){
               answerArray[j]  = guess.toLowerCase();
               remainingLetters--;
            
           }    
           if(guess.toLowerCase() !== answerArray[j]){
                letters += " " + answerArray[j];
           }else{
               guesses--;
           }
        }
        console.log(guesses + "    " + letters);
    
    if(guesses == 0){
            alert("You ran out of guesses!");
            break;
    }
}
}
//finish game.
//Uaing the varible guess, when will you decrement the guesses?
alert("For this round, the answer is " + word + "!");