let secretNumber = Math.floor(Math.random() * 200) + 1;
let guessesRemaining = 5;

function checkGuess() {
    console.log("Function called"); // Check if this logs when you click the guess button
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const output = document.getElementById('output');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 200) {
        alert("Please enter a valid number between 1 and 200.");
        return;
    }

    guessesRemaining--;

    if (userGuess === secretNumber) {
        output.textContent = `Congratulations! You guessed the right number: ${userGuess}`;
        setTimeout(() => window.location.reload(), 4000); // Reload the game after 4 seconds
    } else {
        if (guessesRemaining > 0) {
            alert("Try again!");
            output.textContent = `Wrong guess! You have ${guessesRemaining} guesses remaining.`;
        } else {
            output.textContent = `Game over! The correct number was ${secretNumber}.`;
            setTimeout(() => window.location.reload(), 4000); // Reload the game after 4 seconds
        }
    }
}
