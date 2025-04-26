// Recupera as respostas incorretas do localStorage
const incorrectAnswers = JSON.parse(localStorage.getItem("incorrectAnswers")) || [];
const totalQuestions = parseInt(localStorage.getItem("totalQuestions"), 10) || 0; // Total de perguntas do quiz
const resultsList = document.getElementById("results-list");
const errorSummary = document.getElementById("error-summary");
const restartQuizButton = document.getElementById("restart-quiz");

// Exibir resumo de erros
function displayErrorSummary() {
    const totalErrors = incorrectAnswers.length;
    errorSummary.textContent = `Você errou ${totalErrors} de ${totalQuestions} perguntas!`;
}

// Exibir perguntas incorretas
function displayResults() {
    if (incorrectAnswers.length === 0) {
        resultsList.innerHTML = "<p>Nenhuma resposta incorreta! Parabéns!</p>";
        return;
    }

    incorrectAnswers.forEach((entry) => {
        const { question, selectedAnswer, correctAnswer } = entry;

        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");

        const questionText = document.createElement("p");
        questionText.textContent = `Pergunta: ${question}`;
        resultItem.appendChild(questionText);

        const selectedAnswerText = document.createElement("p");
        selectedAnswerText.textContent = `Sua resposta: ${selectedAnswer}`;
        selectedAnswerText.classList.add("incorrect-answer");
        resultItem.appendChild(selectedAnswerText);

        const correctAnswerText = document.createElement("p");
        correctAnswerText.textContent = `Resposta correta: ${correctAnswer}`;
        correctAnswerText.classList.add("correct-answer");
        resultItem.appendChild(correctAnswerText);

        resultsList.appendChild(resultItem);
    });
}

// Redirecionar para o quiz e reiniciar
restartQuizButton.addEventListener("click", () => {
    localStorage.removeItem("incorrectAnswers"); // Limpa respostas incorretas
    localStorage.removeItem("totalQuestions"); // Limpa o total de perguntas
    window.location.href = "quiz.html"; // Redireciona para o quiz
});

// Inicializar a página
displayErrorSummary();
displayResults();