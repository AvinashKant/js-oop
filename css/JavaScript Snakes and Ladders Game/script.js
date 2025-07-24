document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const rollDiceBtn = document.getElementById('roll-dice');
    const diceDisplay = document.getElementById('dice');
    const playerTurnDisplay = document.getElementById('player-turn');

    const boardSize = 100;
    const snakesAndLadders = {
        16: 6,
        47: 26,
        49: 11,
        56: 53,
        62: 19,
        64: 60,
        87: 24,
        93: 73,
        95: 75,
        98: 78,
        1: 38,
        4: 14,
        9: 31,
        21: 42,
        28: 84,
        36: 44,
        51: 67,
        71: 91,
        80: 100
    };

    let player1Position = 0;
    let player2Position = 0;
    let currentPlayer = 1;
    let gameActive = true;

    function createBoard() {
        for (let i = 1; i <= boardSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add(i % 2 === 0 ? 'even' : 'odd');
            square.textContent = i;
            board.appendChild(square);
        }
    }

    function updatePlayerPosition(player, position) {
        const square = document.querySelector(`.square:nth-child(${position})`);
        if (square) {
            const squareRect = square.getBoundingClientRect();
            const boardRect = board.getBoundingClientRect();
            player.style.left = `${squareRect.left - boardRect.left}px`;
            player.style.top = `${squareRect.top - boardRect.top}px`;
        }
    }

    function rollDice() {
        if (!gameActive) return;
        return Math.floor(Math.random() * 6) + 1;
    }

    function movePlayer(player, position, diceRoll) {
        let newPosition = position + diceRoll;

        if (newPosition > boardSize) {
            newPosition = boardSize;
        }

        if (snakesAndLadders[newPosition]) {
            newPosition = snakesAndLadders[newPosition];
        }

        if (player === 1) {
            player1Position = newPosition;
            updatePlayerPosition(player1, player1Position);
        } else {
            player2Position = newPosition;
            updatePlayerPosition(player2, player2Position);
        }

        if (newPosition >= boardSize) {
            endGame(player);
        }
    }

    function switchPlayer() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        playerTurnDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    }

    function endGame(winner) {
        gameActive = false;
        playerTurnDisplay.textContent = `Player ${winner} Wins!`;
    }

    rollDiceBtn.addEventListener('click', () => {
        const diceRoll = rollDice();
        diceDisplay.textContent = diceRoll;

        if (currentPlayer === 1) {
            movePlayer(1, player1Position, diceRoll);
        } else {
            movePlayer(2, player2Position, diceRoll);
        }

        if (gameActive) {
            switchPlayer();
        }
    });

    createBoard();
    updatePlayerPosition(player1, 1);
    updatePlayerPosition(player2, 1);
});