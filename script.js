const question = [
  {
    question: "",
    answers: [
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answers: [
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
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
