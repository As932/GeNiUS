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
        question: '... este vital în funcționarea organismelor vii, transportând oxigenul în sânge prin molecula de hemoglobină.',
        answers: [
            {text: "Fe (Fier)", correct: true},
            {text: "Ca (Calciu)", correct: false}
        ]
    },
    {
        question: '... are a doua cea mai mare adâncime de penetrare magnetică.',
        answers: [
            {text: "Nb (Niobiu)", correct: false},
            {text: "Tc (Technetiu)", correct: true}
        ]
    },
    {
        question: 'Corpul uman tratează ... ca și cum ar fi potasiu, așa că se găsește cel mai adesea în lichidul celular.',
        answers: [
            {text: "Ca (Calciu)", correct: false},
            {text: "Fe (Fier)", correct: false},
            {text: "P (Fosfor)", correct: false},
            {text: "Rb (Rubidiu)", correct: true}
        ]
    },
    {
        question: 'La ritmul actual de utilizare, unele estimări afirmă că furnizarea de ... va dispărea în zece ani.',
        answers: [
            {text: "Au (Aur)", correct: false},
            {text: "Hf (Hafniu)", correct: true},
            {text: "Ag (Argint)", correct: false},
            {text: "Cd (Cadmiu)", correct: false}
        ]
    },
    {
        question: 'Care este simbolul elementului numit după orașul Dubna?',
        answers: [
            {text: "Db", correct: true},
            {text: "Ds", correct: false}
        ]
    },
    {
        question: '... este utilizat în bateriile reîncărcabile cu hidrură de nichel (NiMH) pentru automobilele hibride.',
        answers: [
            {text: "Ni (Nichel)", correct: false},
            {text: "Pr (Praseodim)", correct: true},
            {text: "H (Hidrogen)", correct: false},
            {text: "U (Uraniu)", correct: false}
        ]
    },
    {
        question: 'Care este elementul radioactiv eficient în cantități foarte mici în detectoarele de fum?',
        answers: [
            {text: "Am (Americiu)", correct: true},
            {text: "Cm (Curiu)", correct: false},
            {text: "Cf (Californiu)", correct: false},
            {text: "Es (Einsteiniu)", correct: false}
        ]
    },
    {
        question: 'Cea mai mare cantitate de ... obținută până în prezent a fost de 125 de grame în 1961 la Autoritatea pentru Energie Atomică din Marea Britanie.',
        answers: [
            {text: "Fm (Fermiu)", correct: false},
            {text: "U (Uraniu)", correct: false},
            {text: "Pa (Protactiniu)", correct: true},
            {text: "Ho (Holmiu)", correct: false}
        ]
    },
    {
        question: 'Sondele spațiale Pioneer și Voyager au folosit bateriile nucleare de ... ca sursă de energie.',
        answers: [
            {text: "La (Lantan)", correct: false},
            {text: "Li (Litiu)", correct: false},
            {text: "Np (Neptuniu)", correct: false},
            {text: "Pu (Plutoniu)", correct: true}
        ]
    },
    {
        question: 'Expunerea la ... crește riscul de a obține o varietate de cancere din cauza radioactivității sale.',
        answers: [
            {text: "U (Uraniu)", correct: true},
            {text: "Nb (Niobiu)", correct: false},
            {text: "In (Indiu)", correct: false},
            {text: "Lv (Livermorium)", correct: false}
        ]
    }
]