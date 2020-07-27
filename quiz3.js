const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text 
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Care element se crede a fi unul din cele trei (pe lângă Hidrogen și Heliu) produse de Big Bang?',
        answers: [
            {text: "Hg (Mercur)", correct: false},
            {text: "Li (Litiu)", correct: true},
            {text: "Cr (Crom)", correct: false},
            {text: "Kr (Kripton)", correct: false}
        ]
    },
    {
        question: 'Care este cel mai abundent metal găsit în mod natural pe Pământ?',
        answers: [
            {text: "Ag (Argint)", correct: false},
            {text: "Au (Aur)", correct: false},
            {text: "Al (Aluminiu)", correct: true},
            {text: "Pt (Platină)", correct: false}
        ]
    },
    {
        question: 'Picturile ruperste din epoca de piatră conțineau pigmenți de ...',
        answers: [
            {text: "Co (Cobalt)", correct: false},
            {text: "Cu (Cupru)", correct: false}, 
            {text: "I (Iod)", correct: false},
            {text: "Mn (Mangan)", correct: true}
        ]
    },
    {
        question: 'Misiunile Apollo au descoperit că ... este prezent în roca lunară.',
        answers: [
            {text: "Zr (Zirconiu)", correct: true},
            {text: "Ge (Germaniu)", correct: false},
            {text: "Bi (Bismut)", correct: false},
            {text: "Pd (Paladiu)", correct: false}
        ]
    },
    {
        question: 'Care este elementul utilizat în implanturi dentare și chirurgicale?',
        answers: [
            {text: "Cs (Cesiu)", correct: false},
            {text: "Ta (Tantal)", correct: true},
            {text: "Fe (Fier)", correct: false},
            {text: "Pb (Plumb)", correct: false}
        ]
    },
    {
        question: 'Care este simbolul elementului numit după câștigătorul premiului Nobel, Glenn Theodore Seaborg?',
        answers: [
            {text: "Sg", correct: true},
            {text: "Sb", correct: false},
            {text: "S", correct: false}, 
            {text: "Sr", correct: false}
        ]
    },
    {
        question: 'Elementul folosit în magneții NIB utilizați în mare parte pentru aparate eletronice este ...',
        answers: [
            {text: "Nh (Nihonium)", correct: false},
            {text: "No (Nobeliu)", correct: false}, 
            {text: "Nb (Niobiu)", correct: false},
            {text: "Nd (Neodim)", correct: true}
        ]
    },
    {
        question: 'Care este elementul radioactiv ce se acumulează în măduvă și oase, oprind formarea globulelor roșii?',
        answers: [
            {text: "Am (Americiu)", correct: false},
            {text: "Md (Mendeleviu)", correct: false},
            {text: "Cm (Curiu)", correct: true},
            {text: "Pu (Plutoniu)", correct: false}
        ]
    },
    {
        question: 'Sulfatul de ... este utilizat pentru a îmbunătăți germinarea semințelor de porumb, mazăre și grâu.',
        answers: [
            {text: "P (Fosfor)", correct: false},
            {text: "Zn (Zinc)", correct: false}, 
            {text: "Sc (Scandiu)", correct: true},
            {text: "Cu (Cupru)", correct: false}
        ]
    },
    {
        question: 'Care a fost primul element radioactiv realizat sintetic?',
        answers: [
            {text: "Ra (Radiul)", correct: true},
            {text: "Db (Dubniu)", correct: false},
            {text: "Cn (Coperniciu)", correct: false},
            {text: "Dy (Disprosiu)", correct: false}
        ]
    }
]