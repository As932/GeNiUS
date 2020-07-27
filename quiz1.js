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
        question: 'Care dintre următoarele elemente a fost numit "aer inflamabil" de către descoperitorul său?',
        answers: [
            {text: "O (Oxigen)", correct: false},
            {text: "He (Heliu)", correct: false},
            {text: "H (Hidrogen)", correct: true},
            {text: "Ne (Neon)", correct: false}
        ]
    },
    {
        question: 'Care este cel mai abundent metal rar de pământ?',
        answers: [
            {text: "Pm (Prometiu)", correct: false},
            {text: "Eu (Europiu)", correct: false},
            {text: "U (Uraniu)", correct: false},
            {text: "Ce (Ceriu)", correct: true}
        ]
    },
    {
        question: 'Care este metalul lantanid folosit în producerea bateriilor reîncărcabile cu hidrură de nichel?',
        answers: [
            {text: "Ni (Nichel)", correct: false},
            {text: "La (Lantan)", correct: true},
            {text: "Gd (Gadoliniu)", correct: false},
            {text: "W (Wolfram)", correct: false}
        ]
    },
    {
        question: 'Pigmenul cărui element albăstrui a fost folosit încă din antichitate?',
        answers: [
            {text: "Co (Cobalt)", correct: true},
            {text: "Sg (Seaborgiu)", correct: false},
            {text: "Es (Einsteiniu)", correct: false},
            {text: "Os (Osmiu)", correct: false}
        ]
    },
    {
        question: 'Care este elementul vital pentru plante și foarte utilizat în industria îngrășămintelor?',
        answers: [
            {text: "Mg (Magneziu)", correct: false},
            {text: "Ca (Calciu)", correct: false},
            {text: "K (Potasiu)", correct: true},
            {text: "Na (Sodiu)", correct: false}
        ]
    },
    {
        question: 'Probe ale cărui element nu există în prezent pe Pământ?',
        answers: [
            {text: "Lr (Lawrenciu)", correct: false},
            {text: "Mt (Meitneriu)", correct: true},
            {text: "Np (Neptuniu)", correct: false},
            {text: "Ds (Darmstadtiu)", correct: false}
        ]
    },
    {
        question: 'Misiunea Luna 24 a descoperit monstre de ... pe Lună.',
        answers: [
            {text: "Hf (Hafniu)", correct: false},
            {text: "Nb (Niobiu)", correct: false},
            {text: "Tc (Technetiu)", correct: false},
            {text: "Mo (Molibden)", correct: true}
        ]
    },
    {
        question: 'Care este al doilea element cel mai frecvent în scoarța terestră?',
        answers: [
            {text: "Si (Siliciu)", correct: true},
            {text: "Li (Litiu)", correct: false},
            {text: "B (Bor)", correct: false},
            {text: "Cu (Cupru)", correct: false}
        ]
    },
    {
        question: 'Elementul care a fost numit glucină datorită gustului dulce al sărurilor sale este ...',
        answers: [
            {text: "Ca (Calciu)", correct: false},
            {text: "Na (Sodiu)", correct: false},
            {text: "Be (Beriliu)", correct: true},
            {text: "Mg (Magneziu)", correct: false}
        ]
    },
    {
        question: 'Cine a inventat tabelul periodic?',
        answers: [
            {text: "Antoine Lavoisier", correct:false},
            {text: "Dmitri Mendeleev", correct: true},
            {text: "Humphry Davy", correct: false},
            {text: "Jöns Jacob Berzelius", correct: false}
        ]
    }
]