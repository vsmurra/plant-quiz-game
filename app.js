// State variables
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let buttonClicked = false

// Select the elements from the HTML
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const feedback = document.getElementById("feedback");
const livesContainer = document.getElementById("lives");
const answerButtons = document.getElementById("answer-buttons");

// Function to start the quiz
// Update `startQuiz` function to show the first question
function startQuiz() {
  startScreen.style.display = "none"; // Hide start screen
  quizScreen.classList.remove("hidden");
  // quizScreen.style.display = "block"; // Show quiz screen
  showQuestion(); // Display the first question
}

// Event listener for the Start Game button
startButton.addEventListener("click", startQuiz);

const quizData = [
  {
    question:
      "which plant is known for its calming effects and ability to help with stress and anxiety reduction",
    options: ["turmeric", "ashwagandha", "oregano oil", "echinacea"],
    answer: "ashwagandha",
  },
  {
    question:
      "Which plant is often used as a natural sleep aid and helps with insomnia?",
    options: ["Valerian Root", "Rosemary", "Thyme", "Cilantro"],
    answer: "Valerian Root",
  },
  {
    question:
      "Which plant is best known for soothing burns and hydrating the skin?",
    options: ["Chamomile", "Dandelion", "Aloe Vera", "Ginger"],
    answer: "Aloe Vera",
  },
  {
    question: "Which plant is used to boost the immune system and fight colds?",
    options: ["Peppermint", "Holy Basil", "Elderberry", "Mullein"],
    answer: "Elderberry",
  },
  {
    question:
      "Which plant is used as a natural stimulant and is believed to increase alertness and memory?",
    options: ["Lavender", "Ashwagandha", "Yerba Mate", "Peppermint"],
    answer: "Yerba Mate",
  },
  {
    question:
      "Which plant is often used to support joint health and has anti-inflammatory effects?",
    options: ["Sage", "Lavender", "Cat’s Claw", "Turmeric"],
    answer: "Turmeric",
  },
  {
    question:
      "Which plant is known for its antibacterial and antifungal properties?",
    options: ["St. John's Wort", "Tea Tree Oil", "Spearmint", "Ginseng"],
    answer: "Tea Tree Oil",
  },
  {
    question:
      "Which plant is commonly used to enhance cognitive function and memory?",
    options: ["Rhodiola Rosea", "Chamomile", "Ginkgo Biloba", "Peppermint"],
    answer: "Ginkgo Biloba",
  },
  {
    question:
      "Which plant is known for balancing hormones and helping with PMS symptoms?",
    options: ["Dandelion", "Ashwagandha", "Chasteberry", "Lavender"],
    answer: "Chasteberry",
  },
  {
    question:
      "Which plant is traditionally used for liver detox and promoting digestion?",
    options: ["Dandelion", "Milk Thistle", "Ginger", "Fennel"],
    answer: "Milk Thistle",
  },
];

//Function to display a question //Displays the current question and adds answer buttons
function showQuestion() {
  buttonClicked = false
  resetState(); //clear old answers before showing a new question
  let currentQuestion = quizData[currentQuestionIndex]; //Get the current quetion
  questionElement.innerText = currentQuestion.question; //Set question text

  // Create buttons for each answer choice
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(option));
    answerButtons.appendChild(button);
  });
}

// Function to reset answer buttons //Clears old answer buttons before adding new ones //Now calls showQuestion() when the game starts
function resetState() {
  answerButtons.innerHTML = ""; // Clears old answer buttons
  feedback.innerText = "";
}

function selectAnswer(playerChoice) {
  if (buttonClicked) return;

  buttonClicked = true
  // compare playerChoice to correct answer
  // correct answer is at: quizData[currentQuestionIndex].answer
  if (quizData[currentQuestionIndex].answer === playerChoice) {
    console.log("correct");
    feedback.innerText = "Correct!";
    score++;
    document.getElementById("score").innerText = score;
  } else {
    console.log("wrong");
    feedback.innerText = "Wrong!";
    lives--;
    livesContainer.innerText = lives;
  } // Show "Correct!" in feedback div

  feedback.classList.remove("hidden");



  if (currentQuestionIndex < quizData.length - 1 && lives > 0) {
    currentQuestionIndex++;
    setTimeout(showQuestion, 1000);
  } else {
    if (lives) {
      questionElement.innerText = "The End";
      answerButton.innerHTML = "";
    } else {
      questionElement.innerText = "You Ran Out of Lives";
      answerButton.innerHTML = "";
    }
    const button = document.createElement("button");
    button.innerText = "Restart Quiz"; // Set text
    button.classList.add("reset-btn"); // Add styling class
    button.addEventListener("click", restartGame); // Call restart function
    answerButtons.appendChild(button); // Add it to the quiz screen
  }
}

// Create a reset Button, make it clickable, once you click it, it calls startQuiz
// HINT: Some variables will need to be reset, HAVE FUN!
function restartGame() {
  // Reset the score to 0
  score = 0;

  // Reset lives to 3
  lives = 3;

  // Reset question index to 0
  currentQuestionIndex = 0;

  // Update the scoreboard & lives on screen
  document.getElementById("score").innerText = 0;
  document.getElementById("lives").innerText = 3;

  // Clear any old feedback or answer buttons
  answerButtons.innerHTML = "";

  // Show the first question again
  showQuestion();
}
// shuffle funciton to randomize question (math.random)

//calling function - something like check win lose state-- if the score is 7 or less and current question index is

// Level Up: Instead of having a feedback text saying right or wrong. Use CSS to change a buttons color based on right or wrong :)

//add plantasia music!!!
//add timelapse of mushrooms growing in background

//if you lose --> you just killed a plant

//calling the funciton to randomoize quesetion (math.random)
