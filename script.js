const choices = document.querySelectorAll('.choices button');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        userChoiceDisplay.textContent = userChoice;
        computerChoiceDisplay.textContent = computerChoice;
        const result = determineWinner(userChoice, computerChoice);
        resultDisplay.textContent = result;
        updateScores(result);
    });
});

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function updateScores(result) {
    if (result === 'You win!') {
        userScore++;
    } else if (result === 'Computer wins!') {
        computerScore++;
    }
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}