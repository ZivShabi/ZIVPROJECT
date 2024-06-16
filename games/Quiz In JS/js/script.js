// יצירת רשימת השאלות
const questionsList = document.createElement('ol');

// שאלה 1
const question1 = document.createElement('li');
const question1Text = document.createElement('p');
question1Text.textContent = 'אלישיב לרנר המרצה של כיתת פיסטוק ?';
const question1TrueLabel = createRadioButton('q1', 'true', 'נכון');
const question1FalseLabel = createRadioButton('q1', 'false', 'לא נכון');
question1.appendChild(question1Text);
question1.appendChild(question1TrueLabel);
question1.appendChild(question1FalseLabel);

// שאלה 2
const question2 = document.createElement('li');
const question2Text = document.createElement('p');
question2Text.textContent = 'בכיתת פיסטוק יש 35 תלמידים?';
const question2TrueLabel = createRadioButton('q2', 'true', 'נכון');
const question2FalseLabel = createRadioButton('q2', 'false', 'לא נכון');
question2.appendChild(question2Text);
question2.appendChild(question2TrueLabel);
question2.appendChild(question2FalseLabel);

// שאלה 3
const question3 = document.createElement('li');
const question3Text = document.createElement('p');
question3Text.textContent = 'אלישיב לרנר הכין עם כיתת פיסטוק משחק Snake ?';
const question3TrueLabel = createRadioButton('q3', 'true', 'נכון');
const question3FalseLabel = createRadioButton('q3', 'false', 'לא נכון');
question3.appendChild(question3Text);
question3.appendChild(question3TrueLabel);
question3.appendChild(question3FalseLabel);

// שאלה 4
const question4 = document.createElement('li');
const question4Text = document.createElement('p');
question4Text.textContent = 'השיעורים בכיתת פיסטוק מתרחשים פרונטלי?';
const question4TrueLabel = createRadioButton('q4', 'true', 'נכון');
const question4FalseLabel = createRadioButton('q4', 'false', 'לא נכון');
question4.appendChild(question4Text);
question4.appendChild(question4TrueLabel);
question4.appendChild(question4FalseLabel);

// שאלה 5
const question5 = document.createElement('li');
const question5Text = document.createElement('p');
question5Text.textContent = 'כיתת פיסטוק התחילה ללמוד בתאריך 20.11.23 ?';
const question5TrueLabel = createRadioButton('q5', 'true', 'נכון');
const question5FalseLabel = createRadioButton('q5', 'false', 'לא נכון');
question5.appendChild(question5Text);
question5.appendChild(question5TrueLabel);
question5.appendChild(question5FalseLabel);

// הוספת השאלות לרשימה
questionsList.appendChild(question1);
questionsList.appendChild(question2);
questionsList.appendChild(question3);
questionsList.appendChild(question4);
questionsList.appendChild(question5);

// הוספת הרשימה ל-DOM
const form = document.getElementById('quiz-form');
form.appendChild(questionsList);

function createRadioButton(name, value, label) {
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = name;
    radioButton.value = value;

    const labelElement = document.createElement('label');
    labelElement.appendChild(radioButton);
    labelElement.appendChild(document.createTextNode(label));

    return labelElement;
}

function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result-container');
    const answers = {
        q1: form.q1.value === 'true',
        q2: form.q2.value === 'true',
        q3: form.q3.value === 'false',
        q4: form.q4.value === 'false',
        q5: form.q5.value === 'true'
    };

    let correctAnswers = 0;
    for (const key in answers) {
        if (answers.hasOwnProperty(key) && answers[key]) {
            correctAnswers++;
        }
    }

    resultContainer.innerHTML = `<p>תשובות נכונות: ${correctAnswers} מתוך 5</p>`;
}
