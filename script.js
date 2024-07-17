document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const resultElement = document.getElementById('result');
    const computerChoiceImage = document.getElementById('computer-choice');

    const images = {
        rock: 'dwayne-the-rock-johnson-2018-1dg.png',
        paper: 'paper.png',
        scissors: 'scissors.png'
    };

    function computerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a draw!';
        }
        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function playGame(playerChoice) {
        const computer = computerChoice();
        const result = getResult(playerChoice, computer);

        resultElement.textContent = `Computer chose ${computer}. ${result}`;
        
        // Set the computer choice image
        computerChoiceImage.src = images[computer];
        computerChoiceImage.alt = computer.charAt(0).toUpperCase() + computer.slice(1);
        computerChoiceImage.style.display = 'block';
    }

    document.getElementById('rock').addEventListener('click', () => playGame('rock'));
    document.getElementById('paper').addEventListener('click', () => playGame('paper'));
    document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
});
