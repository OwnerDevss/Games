const questions = [
    // Perguntas existentes
    {
        question: "Qual é a camada mais externa da pele?",
        answers: ["Epiderme", "Derme", "Hipoderme", "Subcutânea"],
        correct: 0
    },
    {
        question: "Qual o principal objetivo da esfoliação?",
        answers: ["Hidratar a pele", "Remover células mortas", "Proteger a pele", "Fortalecer a pele"],
        correct: 1
    },
    {
        question: "O que é um dermocosmético?",
        answers: [
            "Um cosmético que decora a pele",
            "Um produto farmacêutico para cuidados com a pele",
            "Um sabonete comum",
            "Um creme hidratante básico"
        ],
        correct: 1
    },
    {
        question: "O que significa FPS em protetores solares?",
        answers: [
            "Fator de proteção solar",
            "Fator de potência segura",
            "Fator para pele sensível",
            "Fator de proteção suave"
        ],
        correct: 0
    },
    {
        question: "Qual desses é um tratamento indicado para reduzir manchas na pele?",
        answers: ["Peeling químico", "Massagem modeladora", "Crioterapia", "Limpeza de pele"],
        correct: 0
    },
    {
        question: "O que significa o termo 'fototipo' na estética?",
        answers: [
            "A capacidade de bronzeamento e sensibilidade ao sol da pele",
            "A textura específica da pele",
            "Um tipo de maquiagem",
            "A capacidade da pele de absorver cosméticos"
        ],
        correct: 0
    },
    {
        question: "Qual o principal benefício da drenagem linfática?",
        answers: [
            "Melhorar a circulação sanguínea",
            "Reduzir o inchaço e eliminar toxinas",
            "Clarear manchas na pele",
            "Fortalecer os músculos faciais"
        ],
        correct: 1
    },
    {
        question: "Qual é o pH ideal para um sabonete facial?",
        answers: [
            "Entre 9 e 10",
            "Entre 7 e 8",
            "Entre 4 e 6",
            "Entre 1 e 3"
        ],
        correct: 2
    },
    {
        question: "Qual é o principal objetivo do uso de um tônico facial?",
        answers: [
            "Hidratar a pele",
            "Equilibrar o pH e remover resíduos",
            "Proteger contra raios solares",
            "Clarear manchas"
        ],
        correct: 1
    },
    {
        question: "O que a vitamina C faz na pele?",
        answers: [
            "Hidrata profundamente a pele",
            "Clareia manchas e combate o envelhecimento",
            "Reduz a oleosidade da pele",
            "Fortalece a barreira da pele"
        ],
        correct: 1
    },
    {
        question: "O que é considerado um ativo em cosméticos?",
        answers: [
            "Substância que fornece benefícios específicos para a pele",
            "Conservantes para aumentar a vida útil do cosmético",
            "Perfume adicionado ao produto",
            "Corantes usados para melhorar o visual"
        ],
        correct: 0
    },
    {
        question: "Qual é a função principal do ácido hialurônico?",
        answers: [
            "Estimular a produção de colágeno",
            "Hidratar profundamente a pele",
            "Clarear manchas na pele",
            "Proteger contra raios UV"
        ],
        correct: 1
    },
    {
        question: "O que é a Criolipólise?",
        answers: [
            "Um procedimento para reduzir gordura localizada com baixas temperaturas",
            "Uma técnica de esfoliação profunda",
            "Um tratamento para clarear manchas",
            "Um método para hidratar profundamente a pele"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal objetivo do microagulhamento?",
        answers: [
            "Estimular a produção de colágeno",
            "Remover manchas da pele",
            "Hidratar a pele",
            "Reduzir a oleosidade da pele"
        ],
        correct: 0
    },
    {
        question: "O que faz um protetor solar com FPS 30?",
        answers: [
            "Bloqueia 100% dos raios solares",
            "Permite exposição ao sol 30 vezes mais longa sem queimaduras",
            "Protege apenas contra raios UVB",
            "Proporciona bronzeamento sem riscos"
        ],
        correct: 1
    },
    {
        question: "Qual destes tratamentos é considerado invasivo?",
        answers: [
            "Peeling químico",
            "Microagulhamento",
            "Hidratação facial",
            "Terapia com LED"
        ],
        correct: 1
    },
    // Novas perguntas
    {
        question: "Qual o principal objetivo do uso de máscaras faciais?",
        answers: [
            "Hidratar e nutrir a pele",
            "Proteger contra raios UV",
            "Reduzir a produção de colágeno",
            "Clarear permanentemente todas as manchas"
        ],
        correct: 0
    },
    {
        question: "Qual é o benefício da argila verde para a pele?",
        answers: [
            "Controlar a oleosidade e tratar acne",
            "Hidratar profundamente",
            "Estimular o crescimento de pelos",
            "Reduzir manchas imediatamente"
        ],
        correct: 0
    },
    {
        question: "O que a limpeza de pele profunda NÃO faz?",
        answers: [
            "Remover cravos",
            "Hidratar profundamente",
            "Eliminar células mortas",
            "Promover renovação celular"
        ],
        correct: 1
    },
    {
        question: "Qual ácido é comumente utilizado para tratar linhas finas e rugas?",
        answers: [
            "Ácido salicílico",
            "Ácido hialurônico",
            "Ácido glicólico",
            "Ácido ascórbico"
        ],
        correct: 2
    },
    // Adicione mais 40 perguntas aqui para totalizar 60
];

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para selecionar 20 perguntas aleatórias
function getRandomQuestions() {
    shuffleArray(questions);
    return questions.slice(0, 20);
}

// Variáveis globais
let currentQuestionIndex = 0;
let score = 0; // Armazena a pontuação
let incorrectAnswers = []; // Armazena as respostas incorretas
let selectedQuestions = getRandomQuestions(); // Seleciona 20 perguntas aleatórias

// Elementos do DOM
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result");
const restartButton = document.getElementById("restart-button");

// Iniciar o quiz
function startQuiz() {
    // Limpa o localStorage para um novo quiz
    localStorage.removeItem("incorrectAnswers");
    localStorage.removeItem("totalQuestions");

    currentQuestionIndex = 0;
    score = 0; // Reseta a pontuação ao reiniciar o quiz
    incorrectAnswers = []; // Reseta as respostas incorretas
    selectedQuestions = getRandomQuestions(); // Seleciona novas 20 perguntas
    showQuestion();
}

// Exibir a pergunta atual
function showQuestion() {
    resetState();
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const shuffledAnswers = [...currentQuestion.answers];
    shuffleArray(shuffledAnswers);
    shuffledAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer, currentQuestion));
        answerButtons.appendChild(button);
    });
}

// Resetar o estado da interface
function resetState() {
    nextButton.classList.add("hide");
    resultContainer.classList.add("hide");
    questionElement.classList.remove("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Selecionar uma resposta e destacar a opção escolhida
function selectAnswer(button, selectedAnswer, currentQuestion) {
    // Remove o destaque de todas as respostas
    Array.from(answerButtons.children).forEach((btn) => {
        btn.classList.remove("selected");
    });

    // Destaca a resposta clicada
    button.classList.add("selected");

    // Verifica a resposta correta
    const correctAnswer = currentQuestion.answers[currentQuestion.correct];
    if (selectedAnswer === correctAnswer) {
        score++; // Incrementa a pontuação se a resposta estiver correta
    } else {
        // Adiciona a resposta incorreta à lista
        incorrectAnswers.push({
            question: currentQuestion.question,
            selectedAnswer: selectedAnswer,
            correctAnswer: correctAnswer
        });
    }

    nextButton.classList.remove("hide"); // Exibe o botão "Próxima"
}

// Exibir a próxima pergunta ou o resultado final
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Exibir o resultado final
function showResult() {
    resetState();
    questionElement.classList.add("hide");

    // Salvar respostas incorretas e total de perguntas no localStorage
    localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
    localStorage.setItem("totalQuestions", selectedQuestions.length);

    // Exibir a pontuação correta
    resultText.textContent = `Você acertou ${score} de ${selectedQuestions.length} perguntas!`;
    resultContainer.classList.remove("hide");
}

// Eventos
nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", startQuiz);

// Inicializar o quiz
startQuiz();
