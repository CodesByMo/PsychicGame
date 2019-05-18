
//declare variable
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessList = []

var wins = 0;
var losses = 0;
var guesses = 6;

//decide winning letter
winningLetter = alphabet[Math.floor(Math.random() * 26)]

//game start
document.getElementById("wins").textContent = "wins: " + wins;
document.getElementById("losses").textContent = "losses: " + losses;
document.getElementById("guesses").textContent = "guesses: " + guesses;
document.getElementById("myGuess").textContent = "Guesses so far: " + guessList;

document.addEventListener('keyup', function (event) {
    if (guesses > 0) {
        //winning letter random
        console.log(event.key)
        var guess = event.key;

        if (guess == winningLetter) {
            // get new random letter and adds 1 win. reset previous guesses.
            wins += 1;
            winningLetter = alphabet[Math.floor(Math.random() * 26)];
            guesses = 6;
        } else {
            //Add 1 loss and takes away from guesses.  adds one guess to the list.
            // losses += 1;
            guessList.push(guess)
            guesses--
        }
        if (guesses == 0) {
            losses += 1;
            guesses = 6
            winningLetter = alphabet[Math.floor(Math.random() * 26)];
            guessList = []
        }

    }
    document.getElementById("wins").textContent = "wins: " + wins;
    document.getElementById("losses").textContent = "losses: " + losses;
    document.getElementById("guesses").textContent = "guesses: " + guesses;
    document.getElementById("myGuess").textContent = "Guesses so far: " + guessList;
    console.log(winningLetter)
})



//write to div
