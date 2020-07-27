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
        question: 'Elementul prezent în toate formele de viață și al doilea cel mai frecvent în corpul uman este ... ',
        answers: [
            {text: "Na (Sodiu)", correct: false},
            {text: "C (Carbonul)", correct: true},
            {text: "P (Fosfor)", correct: false},
            {text: "Se (Seleniu)", correct: false}
        ]
    },
    {
        question: 'Sarea de masă este numită în termeni științifici clorură de ...',
        answers: [
            {text: "Mg (Magneziu)", correct: false},
            {text: "K (Potasiu)", correct: false},
            {text: "Li (Litiu)", correct: false},
            {text: "Na (Sodiu)", correct: true}
        ]
    },
    {
        question: 'Clorura de ... este folosită în pasta de dinți pentru dinți sensibili.',
        answers: [
            {text: "S (Sulf)", correct: false},
            {text: "Fe (Fier)", correct: false},
            {text: "Sr (Stronţiu)", correct: true},
            {text: "Mn (Mangan)", correct: false}
        ]
    },
    {
        question: 'Elementul 75 este unul dintre cele mai rare matale existente, aflându-se pe locul 77 din punct de vedere al abundenței pe Pământ.',
        answers: [
            {text: "Ir (Iridiu)", correct: false},
            {text: "Re (Reniu)", correct: true},
            {text: "Os (Osmiu)", correct: false},
            {text: "Pt (Platină)", correct: false}
        ]
    },
    {
        question: 'Sursa celui mai instabil metal care apare în mod natural a fost epuizată încă din 2012',
        answers: [
            {text: "Fr (Franciu)", correct: true},
            {text: "Fl (Flerovium)", correct: false},
            {text: "At (Astatin)", correct: false},
            {text: "Rf (Rutherfordiu)", correct: false}
        ]  
    },
    {
        question: 'Primul element transuraniu este ...',
        answers: [
            {text: "Pa (Protactiniu)", correct: false},
            {text: "Bk (Berkeliu)", correct: false},
            {text: "Np (Neptuniu)", correct: true},
            {text: "Md (Mendeleviu)", correct: false}
        ]
    },
    {
        question: 'Elementul ... este numit după zeița scandinavă a frumuseții și fertilității, Vanadís.',
        answers: [
            {text: "Lv (Livermorium)", correct: false},
            {text: "V (Vanadiu)", correct: true}
        ]
    },
    {
        question: 'Care este al 74-lea cel mai frecvent element de pe Pământ?',
        answers: [
            {text: "Cf (Californiu)", correct: false},
            {text: "Ru (Ruteniu)", correct: true},
            {text: "Rh (Rodiu)", correct: false},
            {text: "Rb (Rubidiu)", correct: false}
        ]
    },
    {
        question: 'Primul transactinid sau element super-greu care a fost descoperit este ...',
        answers: [
            {text: "Rf (Rutherfordiu)", correct: true},
            {text: "Bh (Bohriu)", correct: false},
            {text: "Ts (Tennessine)", correct: false},
            {text: "Mc (Moscovium)", correct: false}
        ]
    },
    {
        question: 'Cel mai reactiv dintre metalele din pământuri rare este ...',
        answers: [
            {text: "U (Uraniu)", correct: false}, 
            {text: "Cm (Curiu)", correct: false},
            {text: "Fm (Fermiu)", correct: false}, 
            {text: "Eu (Europiu)", correct: true}
        ]
    }
]