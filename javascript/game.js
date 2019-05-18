
//declare variable
var alphabet = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 6;

//decide winning letter
var winningLetter;

//game start
if (guesses > 0) {
    //winning letter random
    winningLetter = alphabet[Math.floor(Math.random() * 26)];

    var guess = document.getElementById("guesses").value = ;
    if (guess == winningLetter) {
        // get new random letter and adds 1 win. reset previous guesses.
        wins += 1;
        winningLetter = alphabet[Math.floor(Math.random() * 26)];
        guesses = "";
    } else {
        //Add 1 loss and takes away from guesses.  adds one guess to the list.
        losses += 1;
        guesses += ", " + winningLetter;
    }

    //write to div

    document.getElementById("wins").textContent = "wins: " + wins;
    document.getElementById("losses").textContent = "losses: " + losses;
    document.getElementById("guesses").textContent = "guesses: " + guesses;
    document.getElementById("guesses").textContent = "Guesses so far: " + guesses;
}

console.log(winningLetter);