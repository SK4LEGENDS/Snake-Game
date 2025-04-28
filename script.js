const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");
const pauseButton = document.getElementById("pauseButton");
const startButton = document.getElementById("startButton");
const gridSize = 20;
let snake = [];
let dx = gridSize;
let dy = 0;
let food = {};
let score = 0;
let gameOver = false;
let gamePaused = false;
let lastTime = 0;
let timerInterval;
let gameTime = 0;


function drawRect(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, gridSize, gridSize);
}

function drawSnake() {     //snake details
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? "green" : "lime";
        drawRect(segment.x, segment.y, ctx.fillStyle);
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });
}

function getRandomPosition() {
    const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
    const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
    return { x, y };
}

function placeFood() {
    food = getRandomPosition();
}

function drawFood() {
    ctx.beginPath();
    ctx.arc(food.x + gridSize / 2, food.y + gridSize / 2, gridSize / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        placeFood();
    } else {
        snake.pop();
    }
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }

    return false;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop(timestamp) {
    if (gameOver || gamePaused) return;

    if (lastTime === 0) lastTime = timestamp;
    const deltaTime = timestamp - lastTime;

    if (deltaTime >= 50) {  //snake speed is controlled here
        lastTime = timestamp;
        clearCanvas();
        moveSnake();

        if (checkCollision()) {
            endGame();
            return;
        }

        drawSnake();
        drawFood();
        drawScore();
    }

    requestAnimationFrame(gameLoop);
}

function startGame() {
    score = 0;
    snake = [{ x: 160, y: 160 }];
    dx = gridSize;
    dy = 0;
    placeFood();
    gameOver = false;
    gamePaused = false;
    requestAnimationFrame(gameLoop);
}

function endGame() {
    gameOver = true;
    clearInterval(timerInterval);

    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, canvas.height / 2 - 50, canvas.width, 100);

    ctx.font = "bold 36px Verdana";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    ctx.font = "20px Verdana";
    ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2 + 40);
}

function updateTimer() {
    gameTime++;
    if (gameTime >= totalTime) {
        endGame();
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && dy === 0) {
        dx = 0;
        dy = -gridSize;
    } else if (e.key === "ArrowDown" && dy === 0) {
        dx = 0;
        dy = gridSize;
    } else if (e.key === "ArrowLeft" && dx === 0) {
        dx = -gridSize;
        dy = 0;
    } else if (e.key === "ArrowRight" && dx === 0) {
        dx = gridSize;
        dy = 0;
    }
});

pauseButton.addEventListener("click", () => {
    gamePaused = !gamePaused;
    if (!gamePaused) {
        requestAnimationFrame(gameLoop);
    }
});

startButton.addEventListener("click", startGame);

// Start the game automatically on page load
startGame();

let isSpacePressed = false;  // Track if space was already pressed

document.addEventListener("keydown", (e) => {
  if (e.key === " " || e.code === "Space") {  // Pause on spacebar
      if (!isSpacePressed) {
          gamePaused = !gamePaused;
          isSpacePressed = true;  // Mark space as pressed
          
          if (gamePaused) {
              // Show paused message
              ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
              ctx.fillRect(0, canvas.height / 2 - 50, canvas.width, 100);

              ctx.font = "bold 36px Verdana";
              ctx.fillStyle = "white";
              ctx.textAlign = "center";
              ctx.fillText("Game Paused", canvas.width / 2, canvas.height / 2);
          } else {
              requestAnimationFrame(gameLoop);  // Resume the game
          }
      }
  } else if (e.key === "ArrowUp" && dy === 0) {
      dx = 0;
      dy = -gridSize;
  } else if (e.key === "ArrowDown" && dy === 0) {
      dx = 0;
      dy = gridSize;
  } else if (e.key === "ArrowLeft" && dx === 0) {
      dx = -gridSize;
      dy = 0;
  } else if (e.key === "ArrowRight" && dx === 0) {
      dx = gridSize;
      dy = 0;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === " " || e.code === "Space") {
      isSpacePressed = false;  // Reset the space key press flag when key is released
  }
});
