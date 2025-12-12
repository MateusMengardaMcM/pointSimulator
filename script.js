let score = 0;
let lives = 3;

function addPoint() {
    score++;
    checkScore();
    updateDisplay();
}

function losePoint() {
    score--;
    checkScore();
    updateDisplay();
}

function bonus() {
    score += 10;
    checkScore();
    updateDisplay();
}

function checkScore() {
    if (score % 20 === 0 && score > 0) {
        lives++;
    }

    if (score < 0) {
        lives--;
        score = 0;
    }

    if (lives <= 0) {
        alert("YOUGOTHACKED");
        resetGame();
    }
}

function resetGame() {
    score = 0;
    lives = 3;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("score").innerText = score;
    document.getElementById("lives").innerText = lives;
}