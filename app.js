// Select the elements from the HTML
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startButton = document.getElementById("strat-btn");

// Function to start the quiz
function startQuiz() {
    startScreen.style.display = "none"; // Hide start screen
    quizScreen.style.display = "block"; //Show quiz screen

}

// Event listener for the Start Game button
startButton.addEventListener("click", startQuiz);






// const quizData = [
//     {
//         question: "which plant is known for its calming effects and ability to help with stress and anxiety reduction"
//         options: [turmeric, ashwagandda, oregano oil, echinacea ]
//         answer:
//     }
//     {
//         question: "which plant is commmonly used for digestive issues and has anti-inflammatory properties?"
//         options: [lavendar, eucalyptus, peppermint, ginseng]
//         answer:
//     }
//     {
//         question: "which plant is "
//         options: [ ]
//         answer:
//     }
// ]{
//     question: ""
//     options: [ ]
//     answer:
// }