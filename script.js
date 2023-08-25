const Questions = [{
    q: "Who invented the ball point pen?",
    a: [{ text: "Waterman Brothers", isCorrect: false },
    { text: "Bicc Brothers", isCorrect: false },
    { text: "Biro Brothers", isCorrect: true },
    { text: "Write Brothers", isCorrect: false }
    ]
 
},
{
    q: "Name of the national fruit of India?",
    a: [{ text: "Grapes", isCorrect: false, isSelected: false },
    { text: "Banana", isCorrect: false },
    { text: "Apple", isCorrect: false },
    { text: "Mango", isCorrect: true }
    ]
 
},
{
    q: "What is the new logo of Twitter after replacing the iconic bird logo",
    a: [{ text: "Rocket", isCorrect: false },
    { text: "Tesla Car", isCorrect: false },
    { text: "Alphabet'X'", isCorrect: true },
    { text: "Chat Symbol", isCorrect: false }
    ]
 
},
{
    q: "Which is the longest river in the world",
    a: [{text: "Nile", isCorrect: true },
    { text: "Yamuna", isCorrect: false },
    { text: "Tapti", isCorrect: false},
    { text: "Ganga",isCorrect: false }
    ]
},
{
    q: "Which bank is called bankers bank of India",
    a: [{text: "Indian Bank", isCorrect: false },
    { text: "Reserve Bank", isCorrect: true},
    { text: "Canara Bank", isCorrect: false},
    { text: "Punjab National Bank",isCorrect: false}
]
},
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}
