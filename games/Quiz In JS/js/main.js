
import { objPart1 } from './part1.js';

const obj = { ...objPart1 };
const results = [];
const userAnswers = [];
const container = document.getElementById('container');
const stopwatchElement = document.getElementById('stopwatch');
container.classList.add('flex');
let currentQuestionIndex = 0;
let stopwatchInterval;
let stopwatchTime = 0;

function updateAnswerStyle(answerElement, isCorrect) {
    answerElement.style.backgroundColor = isCorrect ? 'green' : 'red';
    answerElement.style.color = 'white';
    answerElement.style.fontWeight = 'bold';
}

window.checkAnswer = function (questionIndex) {
    const correctAnswer = obj.correctAnswersOrder[questionIndex];
    const userAnswerElements = [
        document.getElementById(`answer1-${questionIndex}`),
        document.getElementById(`answer2-${questionIndex}`),
        document.getElementById(`answer3-${questionIndex}`),
        document.getElementById(`answer4-${questionIndex}`)
    ];

    const userAnswer = userAnswerElements.find(answerElement => {
        return answerElement.style.backgroundColor === 'yellow';
    });

    if (userAnswer) {
        const answerText = userAnswer.innerText[0]; // Get the first letter (e.g., 'א')
        const isCorrect = answerText === correctAnswer;
        updateAnswerStyle(userAnswer, isCorrect);
        userAnswers.push(answerText);
        results.push(isCorrect ? 1 : 0);
    } else {
        userAnswers.push(null); // No answer selected
        results.push(0);
    }

    const resultContainer = document.createElement("div");
    resultContainer.classList.add('result');
    resultContainer.innerHTML = `
        <p>${obj.titles[questionIndex]}</p>
        <p>תשובות המשתמש: ${userAnswers[questionIndex]}</p>
        <p>תשובה נכונה: ${correctAnswer}</p>
        <p>תוצאה: ${results[questionIndex] === 1 ? 'נכון' : 'לא נכון'}</p>
    `;
    container.appendChild(resultContainer);
}

function showQuestion(index) {
    container.innerHTML = '';
    const currentQuestion = obj.questions;
    const column = document.createElement("div");
    column.classList.add('column');
    column.innerHTML = `
        <h1>${obj.titles[index]}</h1>
        <h2>${obj.subTitles[index]}</h2>
        <h4>${currentQuestion}</h4>
        <ol>
            <li id="answer1-${index}" onclick="selectAnswer(${index}, 1)">${obj.options[index * 4]}</li>
            <li id="answer2-${index}" onclick="selectAnswer(${index}, 2)">${obj.options[index * 4 + 1]}</li>
            <li id="answer3-${index}" onclick="selectAnswer(${index}, 3)">${obj.options[index * 4 + 2]}</li>
            <li id="answer4-${index}" onclick="selectAnswer(${index}, 4)">${obj.options[index * 4 + 3]}</li>
        </ol>
        <button onclick="checkAnswer(${index})">בדוק</button>
    `;
    container.appendChild(column);

    if (index < obj.titles.length - 1) {
        const nextButton = document.createElement("button");
        nextButton.textContent = "הבא";
        nextButton.onclick = () => {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        };
        container.appendChild(nextButton);
    } else {
        const finishButton = document.createElement("button");
        finishButton.textContent = "סיום";
        finishButton.onclick = displayTotalScore;
        container.appendChild(finishButton);
    }
}

window.selectAnswer = function (questionIndex, answerIndex) {
    const answerElements = [
        document.getElementById(`answer1-${questionIndex}`),
        document.getElementById(`answer2-${questionIndex}`),
        document.getElementById(`answer3-${questionIndex}`),
        document.getElementById(`answer4-${questionIndex}`)
    ];

    answerElements.forEach(element => {
        element.style.backgroundColor = '';
    });

    document.getElementById(`answer${answerIndex}-${questionIndex}`).style.backgroundColor = 'yellow';
};

document.getElementById('startButton').onclick = () => {
    document.getElementById('startButton').style.display = 'none';
    startStopwatch();
    showQuestion(currentQuestionIndex);
};

window.displayTotalScore = function () {
    stopStopwatch();
    const totalCorrect = results.reduce((sum, result) => sum + result, 0);
    const totalQuestions = obj.titles.length;
    const totalTime = stopwatchElement.textContent;
    container.innerHTML = `
        <h1>תוצאות סופיות</h1>
        <p>סך כל התשובות הנכונות: ${totalCorrect} מתוך ${totalQuestions}</p>
        <p>זמן כולל: ${totalTime}</p>
        <h2>תשובות המשתמש</h2>
        ${obj.titles.map((title, index) => `
            <div class="result">
                <p>${title}</p>
                <p>תשובות המשתמש: ${userAnswers[index] || 'לא נבחרה תשובה'}</p>
                <p>תשובה נכונה: ${obj.correctAnswersOrder[index]}</p>
                <p>תוצאה: ${results[index] === 1 ? 'נכון' : 'לא נכון'}</p>
            </div>
        `).join('')}
    `;
}

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        const hours = Math.floor(stopwatchTime / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((stopwatchTime % 3600) / 60).toString().padStart(2, '0');
        const seconds = (stopwatchTime % 60).toString().padStart(2, '0');
        stopwatchElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}