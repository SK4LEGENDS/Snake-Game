# Notebook Tic-Tac-Toe

Welcome to **Notebook Tic-Tac-Toe**, a web-based version of the classic Tic-Tac-Toe game designed to bring back the nostalgic memories of school days. This project recreates the feel of playing on a notebook page, complete with lined paper backgrounds and handwritten-style fonts — just like doodling in your school notebook during class!

## Overview

Tic-Tac-Toe is a simple two-player game played on a 3x3 grid. Players alternate placing their marks ('X' and 'O') to try and get three in a row—horizontally, vertically, or diagonally. If the grid fills with no winner, the game ends in a draw.

## Key Features

- **Classic Tic-Tac-Toe gameplay:** Two players take turns placing X’s and O’s on a 3x3 grid aiming to align three in a row.  
- **Custom Player Names:** Players can enter their own names before starting the game to personalize the experience.  
- **Score Tracking:** Keeps a running score for both players, updating after every win.  
- **Responsive Board:** The game board dynamically resets after each round to continue playing.  
- **Stylish Notebook Theme:** Background mimics lined notebook paper, with playful handwritten fonts to enhance nostalgia.  
- **Clean UI:** Clear buttons for starting and resetting the game.  
- **Input Validation:** Disallows placing marks on already occupied cells.  
- **Win and Draw Detection:** Accurately detects wins and ties, with alert messages to notify players.  
- **Simple and Lightweight:** Built using plain HTML, CSS, and vanilla JavaScript for easy understanding and customization.

## User Interface & Design

- The background uses a repeating linear gradient that resembles lined paper, giving a real notebook feel.  
- Font choice is ‘Gloria Hallelujah’, a handwritten cursive font from Google Fonts, to mimic writing in a notebook.  
- The game container has a dashed border with a red accent on the left, resembling a notebook margin.  
- Input boxes and buttons are styled with dashed borders and subtle hover effects to keep a casual school vibe.  
- The game board cells have a simple white background with dashed borders and change color based on the player mark (blue for X and red for O).  
- The scoreboard updates dynamically and uses large, readable fonts to show the scores clearly.

## How It Works

### Game Setup

- Players enter their names and press the Start Game button.  
- The game board appears with an empty 3x3 grid.  
- The scoreboard shows the player names and their current scores (starting at zero).

### Gameplay

- Players alternate turns, clicking on empty cells to place their mark (X or O).  
- The game logic prevents clicking on already occupied cells.  
- After each move, the game checks if there is a winner or if the game ended in a draw.  
- If a player wins, an alert announces the winner and the scoreboard updates.  
- If the game is a draw (all cells filled with no winner), an alert announces the draw.  
- The board resets automatically after a win or draw, keeping the scores intact.

### Resetting the Game

- The Reset Game button resets scores and clears the board for a fresh start.  
- Player names remain visible but the game needs to be started again.

## Technology Stack

- **HTML5:** Structure of the page and game elements.  
- **CSS3:** Styling for notebook theme, layout, and interactive effects.  
- **Vanilla JavaScript:** Core game logic, event handling, game state management, and dynamic UI updates.  
- **Google Fonts:** ‘Gloria Hallelujah’ for that handwritten feel.

## Why This Project?

This project is not just about coding a Tic-Tac-Toe game. It’s about combining simple, familiar gameplay with a nostalgic and playful design that connects users to memories of school days. The handwritten font and notebook paper background are deliberate design choices to create a cozy, relatable atmosphere.

It’s perfect for:

- Beginners learning how to build interactive web apps.  
- Anyone wanting a fun, easy-to-understand game.  
- People who love nostalgic, school-themed projects.

## Game Screenshots
![Snake Game](picture/home)


## Conclusion

Thank you for checking out **Notebook Tic-Tac-Toe**! I hope this project sparks a little nostalgia and inspires you to create your own playful, meaningful web apps. Whether you’re here to learn, to play, or to customize, enjoy every moment of the journey. Keep coding, keep dreaming, and most importantly—keep having fun!

Happy gaming and happy coding! 🎉✏️📓


