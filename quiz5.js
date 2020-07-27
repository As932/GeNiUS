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
        question: '... alcătuiește structura externă a oaselor din corpul uman și le conferă forță.',
        answers: [
            {text: "Ca (Calciu)", correct: true},
            {text: "K (Potasiu)", correct: false}
        ]
    },
    {
        question: 'Care element joacă un rol important în reactanții radiologici, ajutând în imagistica cu raze X?',
        answers: [
            {text: "Po (Poloniu)", correct: false},
            {text: "Bi (Bismut)", correct: false},
            {text: "Ba (Bariu)", correct: true},
            {text: "Au (Aur)", correct: false}
        ]
    },
    {
        question: "Care este primul element al seriei de actinide folosit ca sursă de neutroni?",
        answers: [
            {text: "Th (Toriu)", correct: false},
            {text: "Ac (Actiniu)", correct: true}
        ]
    },
    {
        question: '... este singurul metal radioactiv de pământuri rare.',
        answers: [
            {text: "Bk (Berkeliu)", correct: false},
            {text: "U (Uraniu)", correct: false},
            {text: "Pa (Protactiniu)", correct: false},
            {text: "Pm (Prometiu)", correct: true}
        ]
    },
    {
        question: '... este folosit pe scară largă pentru filamentele becurilor electrice și tuburi electronice.',
        answers: [
            {text: "Br (Brom)", correct: false},
            {text: "W (Wolfram)", correct: true},
            {text: "I (Iod)", correct: false},
            {text: "Po (Poloniu)", correct: false}
        ]
    },
    {
        question: '... (III) este cel care conferă rubinelor naturale culoarea lor roșie.',
        answers: [
            {text: "Cu (Cupru)", correct: false},
            {text: "Ni (Nichel)", correct: false},
            {text: "Cr (Crom)", correct: true},
            {text: "Co (Cobalt)", correct: false}
        ]
    },
    {
        question: 'Care este simbolul elementului numit după Niels Bohr?',
        answers: [
            {text: "Br", correct: false},
            {text: "Bh", correct: true}
        ]
    },
    {
        question: 'Utilizarea principală a ... este în magneți ce Își păstrează ferromagnetismul la temperaturi de până la 700°C.',
        answers: [
            {text: "Sm (Samariu)", correct: true},
            {text: "Fe (Fier)", correct: false},
            {text: "Pr (Praseodim)", correct: false},
            {text: "Am (Americiu)", correct: false}
        ]
    },
    {
        question: ' Care element are cea mai mare adâncime de penetrare magnetică dintre toate elementele cunoscute?',
        answers: [
            {text: "Mo (Molibden)", correct: false},
            {text: "Nb (Niobiu)", correct: true},
            {text: "Fe (Fier)", correct: false},
            {text: "Ge (Germaniu)", correct: false}
        ]
    },
    {
        question: 'Care este cel mai rar dintre toate elementele stabile?',
        answers: [
            {text: "Ir (Iridiu)", correct: false},
            {text: "Os (Osmiu)", correct: true},
            {text: "Hf (Hafniu)", correct: false},
            {text: "Rg (Roentgeniu)", correct: false}
        ]
    }
]