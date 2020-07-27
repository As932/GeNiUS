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
        question: '... este prezent în pereții celulari ai plantelor și, prin urmare, este prezent în toate produsele alimentare făcute din plante.',
        answers: [
            {text: "Br (Brom)", correct: false},
            {text: "B (Bor)", correct: true},
            {text: "Se (Seleniu)", correct: false},
            {text: "Te (Telur)", correct: false}
        ]
    },
    {
        question: '... este ionul metalic care se găsește în centrul fiecărei molecule de clorofilă și este un element esențial pentru fotosinteză.',
        answers: [
            {text: "Ca (Calciu)", correct: false},
            {text: "Sr (Stronțiu)", correct: false},
            {text: "Mg (Magneziu)", correct: true},
            {text: "Ba (Bariu)", correct: false}
        ]
    },
    {
        question: 'Care dintre elemente a jucat un rol cheie în Războiul Rece, atât pentru SUA, cât și pentru URSS fiind folosit în apărare?',
        answers: [
            {text: "Ti (Titan)", correct: true},
            {text: "Fe (Fier)", correct: false},
            {text: "Cu (Cupru)", correct: false}, 
            {text: "Pb (Plumb)", correct: false}
        ]
    },
    {
        question: '... reduce emisiile dăunătoare din mașini prin transformarea monoxidului de carbon și a altor gaze în gaze mai puțin otrăvitoare.',
        answers: [
            {text: "Pd (Paladiu)", correct: false}, 
            {text: "Co (Cobalt)", correct: false},
            {text: "Os (Osmiu)", correct: false}, 
            {text: "Rh (Rodiu)", correct: true}
        ]
    },
    {
        question: 'Care este primul element descoperit cu ajutorul spectroscopului?',
        answers: [
            {text: "Ba (Bariu)", correct: false},
            {text: "Cs (Cesiu)", correct: true}, 
            {text: "Hf (Hafniu)", correct: false},
            {text: "Hs (Hassiu)", correct: false}
        ]
    },
    {
        question: 'Care este elementul ce se descompune atât de repede încât cercetătorii nu se așteaptă să vadă vreodată o cantitate observabilă a acestuia?',
        answers: [
            {text: "Hg (Mercur)", correct: false},
            {text: "Ho (Holmiu)", correct: false},
            {text: "Hs (Hassiu)", correct: true},
            {text: "He (Heliu)", correct: false}
        ]
    },
    {
        question: 'Care este simbolul elementului numit după chimistul și minerologul Johan Gadolin?',
        answers: [
            {text: "Gd", correct: true},
            {text: "Ga", correct: false}
        ]
    },
    {
        question: "Care este elementul examinat de Berzelius găsit pe o insulă în apropiere de Brevik, Norvegia?",
        answers: [
            {text: "Si (Siliciu)", correct: false},
            {text: "Se (Seleniu)", correct: false},
            {text: "Ce (Ceriu)", correct: false},
            {text: "Th (Toriu)", correct: true}
        ]
    },
    {
        question: '...-90, un izotop radioactiv, este utilizat în tratamente pentru diferite tipuri de cancer și este utilizat în ace medicale de precizie.',
        answers: [
            {text: "Y (Ytriu)", correct: true},
            {text: "Zr (Zirconiu)", correct: false},
            {text: "Ba (Bariu)", correct: false},
            {text: "Ni (Nichel)", correct: false}
        ]
    },
    {
        question: "Elementul numit după latinescul curcubeu, datorită culorilor diverse ale sărurilor sale este ...",
        answers: [
            {text: "Mn (Mangan)", correct: false},
            {text: "Ir (Iridiu)", correct: true},
            {text: "Co (Cobalt)", correct: false},
            {text: "Sn (Staniu)", correct: false}
        ]
    }
]