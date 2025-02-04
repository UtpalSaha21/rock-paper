let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let totalRounds = 0;
let currentRound = 0;

function startGame() {
    totalRounds = parseInt(document.getElementById("rounds").value);
    if (isNaN(totalRounds) || totalRounds < 1) {
        alert("Please enter a valid number of rounds.");
        return;
    }

    // Reset scores
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    currentRound = 0;

    // Reset displayed values
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("tie-score").innerText = tieScore;
    document.getElementById("current-round").innerText = currentRound;
    document.getElementById("total-rounds").innerText = totalRounds;
    document.getElementById("game-over-message").innerText = "";
    document.getElementById("round-summary").innerText = "";

    // Show game screen and hide round selection
    document.getElementById("round-selection").style.display = "none";
    document.getElementById("game-container").style.display = "block";
}

function playGame(userChoice) {
    if (currentRound >= totalRounds) {
        return;
    }

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user-choice").innerText = "You chose: " + userChoice;
    document.getElementById("computer-choice").innerText = "Computer chose: " + computerChoice;

    let result;
    if (userChoice === computerChoice) {
        result = "It's a draw!";
        tieScore++;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win this round! 🎉";
        playerScore++;
    } else {
        result = "You lose this round! 😢";
        computerScore++;
    }

    currentRound++;
    document.getElementById("result").innerText = result;
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("tie-score").innerText = tieScore;
    document.getElementById("current-round").innerText = currentRound;

    let roundSummary = `Round ${currentRound}: ${result} - Player: ${playerScore} | Computer: ${computerScore} | Ties: ${tieScore}`;
    document.getElementById("round-summary").innerText = roundSummary;

    if (currentRound >= totalRounds) {
        endGame();
    }
}

function endGame() {
    let finalMessage = "";
    if (playerScore > computerScore) {
        finalMessage = `🎉 Congratulations! You won the game! 🏆`;
    } else if (playerScore < computerScore) {
        finalMessage = `😢 Game over! The computer won.`;
    } else {
        finalMessage = `🤝 It's a tie! Well played.`;
    }

    // Display final result and scores
    document.getElementById("game-over-message").innerHTML = `
        <h2>${finalMessage}</h2>
        <p>Final Score:</p>
        <p>Player = ${playerScore} </p>
        <p>Computer = ${computerScore} </p>
        <p>Tie = ${tieScore}</p>
    `;

    // Show reset option
    document.getElementById("round-selection").style.display = "block";
    document.getElementById("game-container").style.display = "none";
}
