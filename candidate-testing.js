const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter  your name : ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer=input.question(question);
  for (let i = 0; i <= questions.length - 1; i++) {
    candidateAnswers[i] = input.question(questions[i]);
    
  }
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let correctAnswersCount = 0;
  for(let i = 0; i <= candidateAnswers.length - 1; i++) {
    if(correctAnswers[i].toUpperCase() === candidateAnswers[i].toUpperCase()) {
      console.log(`${i + 1}. ${questions[i]}`);
      console.log(`Your answer: ${candidateAnswers[i]}`);
      console.log(`Correct answer : ${correctAnswers[i]}` + "\n");
      correctAnswersCount += 1;
    } else {
      console.log(`${i + 1}. ${questions[i]}`);
      console.log(`Hey ${candidateAnswers[i]} is wrong answer.`);
      console.log(`Correct answer : ${correctAnswers[i]}` + "\n");
    }
  }
  
  let grade = correctAnswersCount / questions.length * 100;
  //TODO 3.2 use this variable to calculate the candidates score.
  if (grade == 0) {
    console.log("Your Grade: 0% (0 of 5 responses correct)");
    console.log(" Status: FAILED");
  } else if (grade == 20) {
    console.log("Your Grade: 20% (1 of 5 responses correct)");
    console.log(" Status: FAILED");
  } else if (grade == 40) {
    console.log("Your Grade: 40% (2 of 5 responses correct)");
    console.log(" Status: FAILED");
  } else if (grade == 60) {
    console.log("Your Grade: 60% (3 of 5 responses correct)");
    console.log(" Status: FAILED");
  } else if (grade == 80) {
    console.log("Your Grade: 80% (4 of 5 responses correct)");
    console.log(" Status: PASSED");
  } else if (grade == 100) {
    console.log("Your Grade: 100% (5 of 5 responses correct)");
    console.log(" Status: PASSED");
  }
  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hi " + candidateName + ", lets start the test : ");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}