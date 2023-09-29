var timeSpan = document.getElementById("time-left");
var startBtn = document.getElementById("start-btn");

let currQuestion = 0;
let score = timeLeft;

function loadQuestion() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    question.textContent = questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

function nextQuestion() {
    if (currQuestion < questions.length - 1) {
        currQuestion++;
        loadQuestion();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		// loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (questions[currQuestion].a[selectedAns].isCorrect) {
        console.log("Correct");
        nextQuestion();
    } else {
        timeLeft -= 90;
        console.log("Incorrect");
        nextQuestion();
    }
}


var timeLeft = questions.length * 60;

function displayTime() {
    timeSpan.textContent = timeLeft;
};

startBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var timeInterval = setInterval(function () {
        displayTime();
        timeLeft--;
    }, 1000);

    loadQuestion();
});