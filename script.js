const quiz = [
  {
    question: "Which language is used for web pages?",
    options: ["HTML", "Python", "C++", "Java"],
    answer: 0
  },
  {
    question: "Which is used for styling?",
    options: ["HTML", "CSS", "JS", "PHP"],
    answer: 1
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[index].question;
  quiz[index].options.forEach((opt, i) => {
    document.getElementById("opt" + i).innerText = opt;
  });
}

function checkAnswer(option) {
  if (option === quiz[index].answer) {
    score++;
    document.getElementById("result").innerText = "Correct ✔";
    document.getElementById("result").style.color = "lightgreen";
  } else {
    document.getElementById("result").innerText = "Wrong ✖";
    document.getElementById("result").style.color = "red";
  }
}

function nextQuestion() {
  index++;
  if (index < quiz.length) {
    loadQuestion();
    document.getElementById("result").innerText = "";
  } else {
    document.querySelector(".quiz-container").innerHTML =
      `<h1 style="color:lightgreen">Quiz Completed</h1>
       <p>Your Score: ${score}/${quiz.length}</p>`;
  }
}

loadQuestion();
