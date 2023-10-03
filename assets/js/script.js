var timeSpan = document.getElementById("time-left");
var startBtn = document.getElementById("start-btn");
var subBtn = document.getElementById("btn");
var hsWp = document.getElementById("hs-wp")
var timeInterval;
var timeLeft = questions.length * 60;

// places index for current question to begin at 0 and sets timeLeft to score, which is used in the localstorage
let currQuestion = 0;
let score = timeLeft;

// overall, the below function is what is used to display the questions upon clicking "start game"
function loadQuestion() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    // the below two lines turn the questions into text that is displayable on the html
    question.textContent = questions[currQuestion].q;
    opt.innerHTML = ""

    // the below 'for' loop turns the answer choices into selectable choices on the html and also makes the "submit" button visible
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

        subBtn.style.display = "block";
    }
}

// the below function is what transitions the user from one question to the other, and upon completing the final question, the newly created html elements will be removed, the time will be recorded on the localstorage as the user score, and the user will be re-directed to the highscores html page
function nextQuestion() {
    if (currQuestion < questions.length - 1) {
        currQuestion++;
        loadQuestion();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
		document.getElementById("btn").remove()
        clearInterval(timeInterval);
        localStorage.setItem("score", timeLeft);
		window.location.href = "highscores.html";
    }
}

// the below function is what determines if the user selected choice is correct or not, and then move to the next question function. If incorrect, the user will be deducted 90 seconds from their time left.
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

// the below function is what displays the time left when the game is started
function displayTime() {
    timeSpan.textContent = timeLeft;
};

// the below event listener is the "start game" button, which upon click, will begin the timer and begin the loadQuestion function. Upon reaching 0 seconds remaining on the timer, the game will end, the score will be saved to localstorage, and the user will be re-directed to the highscores page
startBtn.addEventListener("click", function (event) {
    event.preventDefault();

    timeInterval = setInterval(function () {
        displayTime();
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timeInterval)
            localStorage.setItem("score", timeLeft);
            window.location.href = "highscores.html"
        }
    }, 1000);

    loadQuestion();
});