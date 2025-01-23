// quiz.js

const questions = [
    {
      question: "¿Cuál es su color favorito?",
      answers: ["Rosa", "Azul", "Verde", "Amarillo"],
      correct: 2,
    },
    {
      question: "¿Cuál es su comida favorita?",
      answers: ["Pizza", "Sushi", "Hamburguesas", "Enchiladas"],
      correct: 3,
    },
    {
      question: "¿En qué mes cumple años?",
      answers: ["Enero", "Junio", "Septiembre", "Diciembre"],
      correct: 1,
    },
  ];
  
  let currentQuestion = 0;
  
  document.getElementById("startQuiz").addEventListener("click", () => {
    document.getElementById("quizContainer").classList.remove("hidden");
    loadQuestion();
  });
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("questionText").textContent = question.question;
  
    const answersContainer = document.getElementById("answersContainer");
    answersContainer.innerHTML = "";
  
    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", () => {
        if (index === question.correct) {
          alert("¡Correcto! 🎉");
          currentQuestion++;
          if (currentQuestion < questions.length) {
            loadQuestion();
          } else {
            alert("¡Completaste el quiz! 🏆");
          }
        } else {
          alert("Incorrecto. Intenta de nuevo. ❌");
        }
      });
      answersContainer.appendChild(button);
    });
  }
  