// Create an array of words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "apple",
    "orange"
];
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
var letterLeft = 3;
var myButton = document.getElementById("stylez").addEventListener("click", theGame)

// The game loop
function theGame() {
    while (remainingLetters > 0 && letterLeft !== 0) {
        // Show the player their progress

        // Get a guess from the player
        var guess = prompt("Guess a letter, or click Cancel to stop playing." + "\n" + "You have " + letterLeft + " lives left.").toLocaleLowerCase();
        if (guess === null) {
            // Exit the game loop
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
            letterLeft++;
        } else {

            // Update the game state with the guess
            for (var j = 0; j < word.length; j++) {
                if (guess === answerArray[j]) {
                    alert("Letter was already picked. Try again.");
                    letterLeft++;
                    break;
                } else if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                    letterLeft++;
                    break;
                }

            }
        }
        letterLeft--;
        alert(answerArray.join(" "));

        // The end of the game loop
    }
    if (letterLeft == 0) {
        alert("Sorry no more lives left." + "\nThe answer was: " + word)
    } else {
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + word);
    }
}
// Show the answer and congratulate the player