# 🐍 Snake Game – Classic Fun with a Retro Red Twist

**Snake Game** is a timeless arcade classic reborn on the web!  
Control your snake, gobble up food, grow longer, and dodge the walls and your own tail.  
Simple to play, addictive to master — this one’s a fun little challenge wrapped in bold black and red vibes! 🔴🖤

---

## 🎮 Gameplay Overview

### 🎯 Objective  
Guide the snake to eat food pieces to grow as long as possible without crashing into walls or itself.

### 🐍 How to Play

- ▶️ Use the arrow keys to steer the snake:  
  ⬆️ Up &nbsp;&nbsp;&nbsp;&nbsp; ⬇️ Down &nbsp;&nbsp;&nbsp;&nbsp; ⬅️ Left &nbsp;&nbsp;&nbsp;&nbsp; ➡️ Right  
- 🍎 Eat the red food to grow longer and increase your score.  
- ⛔ Avoid hitting the black canvas border or the snake’s own body.  
- ⏸️ Use the Pause button or press Spacebar to pause/resume.  
- 🔄 Use the Start button to reset and begin a new game.

---

## ✨ Features

- 🖤 Stylish black canvas with bold red border and highlights  
- 🕹️ Responsive controls using keyboard arrows  
- 🍎 Random food spawning on free spots  
- 🔢 Real-time score display  
- ⏸️ Pause and resume functionality (button + spacebar)  
- 🚦 Start button to reset the game anytime  
- 👾 Smooth snake movement and collision detection  
- 💻 Clean and well-structured HTML, CSS, and JavaScript code

---

## 🛠️ Tech Stack

| Technology     | Role                                     |
|----------------|------------------------------------------|
| `HTML5 Canvas` | Game rendering and drawing                |
| `CSS3`         | Styling, layout, and UI controls          |
| `Vanilla JS`   | Game logic, input handling, animation loop|

---

## ⚙️ How It Works

### 🐍 Snake Representation  
The snake is an array of coordinates (x, y) representing its body segments.  
On each game tick, the snake moves by adding a new head in the current direction and removing the tail unless it eats food.

### 🍎 Food Mechanics  
Food appears randomly on the canvas grid, avoiding the snake’s current position.  
When the snake’s head reaches the food, the snake grows longer, and the score increments.

### 🕹️ Controls and Game Flow  
- Arrow keys change the snake’s direction, but no 180° turns allowed.  
- The game updates every fixed interval (game loop).  
- If the snake collides with itself or the canvas border, the game ends.  
- The pause button or spacebar toggles pause/resume.  
- The start button resets the game state.

---

## 📸 Demo

Here’s a quick glimpse of the gameplay:  

![Snake Game Screenshot](picture/demo.png)

---

## 🚀 How to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/snake-game.git
   cd snake-game
