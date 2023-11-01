const question = [
  {
    questions: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "Hyperlink and Text Markup Language", correct: false },
      { text: "High Text Multilanguage", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
    ],
  },
  {
    questions: "Which HTML element is used to define a hyperlink?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<hlink>", correct: false },
    ],
  },
  {
    questions: "Which HTML tag is used to create an unordered list?",
    answers: [
      { text: "<ul>", correct: true },
      { text: "<ol>", correct: false },
      { text: "<li>", correct: false },
      { text: "<list>", correct: false },
    ],
  },
  {
    questions: "What is the correct CSS syntax to select an element with the ID myElement?",
    answers: [
      { text: "#myElement", correct: true },
      { text: ".myElement", correct: false },
      { text: "element#myElement", correct: false },
      { text: "element.myElement", correct: false },
    ],
  },
  {
    questions: "In CSS, how can you make text bold?",
    answers: [
      { text: "font-weight: bold;", correct: true },
      { text: "text-bold: true;", correct: false },
      { text: "bold-text: on;", correct: false },
      { text: "text: bold;", correct: false },
    ],
  },
  {
    questions: "What CSS property is used to set the background color of an element?",
    answers: [
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "bgcolor", correct: false },
      { text: "bg-color", correct: false },
    ],
  },
  {
    questions: " Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "int", correct: false },
    ],
  },
  {
    questions: "What is the result of the expression 5 + 2 in JavaScript?",
    answers: [
      { text: "'52'", correct: true },
      { text: "'7'", correct: false },
      { text: "7", correct: false },
      { text: "52", correct: false },
    ],
  },
  {
    questions: " What does the typeof operator in JavaScript return for an array?",
    answers: [
      { text: "object", correct: true },
      { text: "array", correct: false },
      { text: "list", correct: false },
      { text: "collection", correct: false },
    ],
  },
  {
    questions: "What is the correct way to write a comment in JavaScript?",
    answers: [
      { text: "// This is a comment", correct: true },
      { text: "/* This is a comment */", correct: false },
      { text: "# This is a comment", correct: false },
      { text: "-- This is a comment", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = doucment.getElementById("next-btn");

function startQuiz() {
  let currentquestionIndex = 0;
  let score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  restState();
  let currentquestionIndex = question[currentquestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = question + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function restState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild)
    answerButtons.removeChild(answersButtons.firstChild);
}

function selectAnswer(e) {
  const SelectionBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add(correct);
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  restState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentquestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton,
  addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });

startQuiz();
