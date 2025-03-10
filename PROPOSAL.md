# Quiz Game - Plant Trivia

## Project Description

The Plant Trivia Quiz Game is a game that challenges players with questions about plants. The game will different multiple categories, a scoring system, and a sound for correct and incorrect answers. The goal is to educate players with engaging questions while keeping track of their progress. (this plant helps with … xx, xx, xx, xx)

## Wire Frames:
 
![Wireframe](./assets/wireframe.png)

## User Stories

### MVP Goals
As a player, I want:
- to choose between at least four options for each plant-related question.
- to see a question displayed on the screen with multiple-choice answers.
- to select an answer and receive feedback on whether I was correct or incorrect.
- to be tracked and displayed so that I can see my progress.
- hear sound effects when I answer correctly or incorrectly.
- the game to end after a set number of questions and display my final score.

### Stretch Goals
As a player, I want :
- a timer for each question to add a challenge.
- animations or visual effects when I answer correctly or incorrectly.
- a leaderboard to compare my score with others.
- the option to retry the quiz with new questions.

## Pseudocode
```javascript
// 1) Define game variables:
//    - Question and answer data (array of objects)
//    - Score tracking
//    - Audio for correct/incorrect answers

// 2) Display category selection screen

// 3) When a player selects a start game:
//    - Load a set of questions from the questions array
//    - Display the first question with multiple-choice answers

// 4) Handle player input:
//    - If the player selects the correct answer, increase the score
//    - If incorrect, provide feedback
//    - Play corresponding sound effect

// 5) Move to the next question until all questions are answered

// 6) End game conditions:
//    - Display the final score
//    - Provide an option to restart the quiz
```

## Timeline

| Day       | Task                                   | Blockers | Notes/Thoughts |
|-----------|----------------------------------------|----------|----------------|
| Monday    | Create and present proposal           | None     |                |
| Tuesday   | Set up GitHub repo and create files   | None     |                |
| Wednesday | Create basic HTML, CSS, and JS scaffolding | None     |                |
| Thursday  | Implement game logic                  | None     |                |
| Friday    | Add styling and UI improvements       | None     |                |
| Saturday  | Finalize MVP features                 | None     |                |
| Sunday    | Work on stretch goals/ fix bugs & polish UI | None     |                |
| Monday    | Presentation Day                      | None     |                |


## Additional Planning Requirements
- The game will use CSS Grid/Flexbox for layout.
- Sound effects will be implemented using JavaScript's Audio API.
- At least two categories of questions will be available.
- The game will be deployed online using GitHub Pages.

