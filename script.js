const board = document.getElementById('board');
const cells = document.getElementsByClassName('cell');
const resetButton = document.getElementById('reset');

let currentPlayer = '❌';
let gameOver = false;

const gameOverMessage = document.getElementById('gameStatus');

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
        if (!cells[i].textContent && !gameOver) {
            cells[i].textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === '❌' ? '⭕' : '❌';
        }
    });
}

resetButton.addEventListener('click', () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    gameOver = false;
    currentPlayer = '❌';
    gameStatus.classList.add('hidden');
});

function checkWin() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            cells[a].classList.add('win');
            cells[b].classList.add('win');
            cells[c].classList.add('win');
            gameOver = true;
            gameStatus.classList.remove('hidden');
            return;
        }
    }

    if (!Array.from(cells).some(cell => !cell.textContent)) {
        gameOver = true;
        gameStatus.classList.remove('hidden');
    }


}