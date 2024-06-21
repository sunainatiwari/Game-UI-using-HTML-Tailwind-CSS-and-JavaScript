// Function to show the selected game
function showGame(game) {
    // Hide the main title and nav buttons
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('nav-buttons').style.display = 'none';

    // Hide both game divs
    document.getElementById('swg-game').classList.add('hidden');
    document.getElementById('ngg-game').classList.add('hidden');

    // Show the selected game
    if (game === 'swg') {
        document.getElementById('swg-game').classList.remove('hidden');
    } else if (game === 'ngg') {
        document.getElementById('ngg-game').classList.remove('hidden');
        resetNumberGuessingGame();
    }
}

// Function to play Snake Water Gun
function playSWG(userChoice) {
    const choices = ['snake', 'water', 'gun'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((userChoice === 'snake' && computerChoice === 'water') ||
               (userChoice === 'water' && computerChoice === 'gun') ||
               (userChoice === 'gun' && computerChoice === 'snake')) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    document.getElementById('swg-result').innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

// Variable to store the random number for the number guessing game
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to reset the number guessing game
function resetNumberGuessingGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById('userGuess').value = '';
    document.getElementById('ngg-result').innerText = '';
}

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    let result = '';

    if (isNaN(userGuess)) {
        result = 'Please enter a valid number.';
    } else if (userGuess === randomNumber) {
        result = 'Congratulations! You guessed the correct number!';
    } else if (userGuess > randomNumber) {
        result = 'Your guess is too high.';
    } else {
        result = 'Your guess is too low.';
    }

    document.getElementById('ngg-result').innerText = result;
}
