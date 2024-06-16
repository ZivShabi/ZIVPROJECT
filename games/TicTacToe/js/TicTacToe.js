document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("welcome-screen").style.display = "flex";
});

document.getElementById("start-button").addEventListener("click", function () {
    document.getElementById("welcome-screen").style.display = "none";
    document.querySelector(".container").style.display = "block";
});

const divs = document.querySelectorAll(".TicTacToe .btn");
let isX = true;
let isGameOver = false;
let computerMode = false;

const scores = {
    x: localStorage.x ? Number(localStorage.x) : 0,
    o: localStorage.o ? Number(localStorage.o) : 0,
};

document.getElementById("xScoreDisplay").innerText = scores.x;
document.getElementById("oScoreDisplay").innerText = scores.o;

divs.forEach(div => {
    div.addEventListener("click", ev => {
        if (isGameOver) {
            return;
        }

        const elem = ev.target;

        if (elem.innerText) {
            return;
        }

        if (isX) {
            elem.innerText = "X";
        } else {
            elem.innerText = "O";
        }

        isX = !isX;
        showTurn();
        checkWinner();

        if (computerMode && !isGameOver) {
            setTimeout(computerMove, 500);
        }
    });
});

function showTurn() {
    document.querySelector('.currentTurn').classList.remove('currentTurn');

    if (isX) {
        document.querySelector("#players > div:first-child").classList.add('currentTurn');
    } else {
        document.querySelector("#players > div:last-child").classList.add('currentTurn');
    }
}

function checkWinner() {
    const options = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const op of options) {
        if (op.every(x => divs[x].innerText === 'X')) {
            scores.x++;
            winner(op, 'X');
            document.getElementById("xScoreDisplay").innerText = scores.x;
            break;
        } else if (op.every(x => divs[x].innerText === 'O')) {
            scores.o++;
            winner(op, 'O');
            document.getElementById("oScoreDisplay").innerText = scores.o;
            break;
        }
    }

    if (!isGameOver && [...divs].every(x => x.innerText)) {
        setMessage("אין מנצח");
        isGameOver = true;
    }
}

function winner(op, win) {
    const winnerName = win === 'X' ? document.getElementById("playerXName").innerText : document.getElementById("playerOName").innerText;
    setConfettiMessage(winnerName + " ניצח!");
    op.forEach(x => divs[x].classList.add('win'));

    isGameOver = true;

    localStorage.x = scores.x;
    localStorage.o = scores.o;

    setTimeout(() => {
        newGame();
        document.getElementById("confetti").style.display = 'none';
    }, 3000);
}

function newGame() {
    divs.forEach(div => {
        div.innerText = '';
        div.classList.remove('win');
    });

    isGameOver = false;
    showTurn();
    setMessage("");
}

function resetGame() {
    scores.x = 0;
    scores.o = 0;
    localStorage.removeItem('x');
    localStorage.removeItem('o');
    document.getElementById("xScoreDisplay").innerText = scores.x;
    document.getElementById("oScoreDisplay").innerText = scores.o;
    newGame();
}

function startGame() {
    const playerNameX = document.getElementById("playerNameX").value || 'X';
    const playerNameO = document.getElementById("playerNameO").value || 'O';

    document.getElementById("playerXName").innerText = playerNameX;
    document.getElementById("playerOName").innerText = playerNameO;

    document.getElementById("playerNameX").style.display = 'none';
    document.getElementById("playerNameO").style.display = 'none';

    newGame();
    document.getElementById("playerSelection").style.display = "none";
    document.querySelector(".TicTacToe").style.display = "flex";
}

function toggleComputerMode() {
    computerMode = document.getElementById("computerMode").checked;
}

function computerMove() {
    let emptySquares = [];
    divs.forEach((div, index) => {
        if (!div.innerText) {
            emptySquares.push(index);
        }
    });

    if (emptySquares.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        const move = emptySquares[randomIndex];
        divs[move].innerText = "O";

        isX = !isX;
        showTurn();
        checkWinner();
    }
}

function setMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerText = message;
    messageDiv.style.display = message ? "block" : "none";
}

function setConfettiMessage(message) {
    const confettiDiv = document.getElementById("confetti");
    const confettiText = document.getElementById("confettiText");
    confettiText.innerText = message;
    confettiDiv.style.display = 'flex';
}