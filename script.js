const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Madrid", "Berlin", "London", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "F. Scott Fitzgerald"],
        correctAnswer: "William Shakespeare"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score-value');
const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', nextQuestion);

function nextQuestion() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (!selectedChoice) {
        return;
    }

    const selectedAnswer = selectedChoice.value;

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }

    selectedChoice.checked = false;
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const choiceElement = document.createElement('li');
        choiceElement.classList.add('list-group-item');
        choiceElement.innerHTML = `
            <input type="radio" name="choice" value="${choice}" id="choice${index}">
            <label for="choice${index}">${choice}</label>
        `;
        choicesElement.appendChild(choiceElement);
    });
}

function endQuiz() {
    questionElement.textContent = "Quiz completed!";
    choicesElement.innerHTML = '';
    nextButton.disabled = true;
    scoreElement.textContent = score;
}

displayQuestion();
