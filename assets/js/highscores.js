var score = localStorage.getItem("score");
var subBtn = document.getElementById("sub-btn")
var leaderBoard = JSON.parse(localStorage.getItem("ldrBoard")) || []
var scoreList = document.getElementById("score-list");

// the below event listener is the "submit" button on the highscores.html page, which displays the user score and initials.
subBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // upon click, the submit button is disabled
    subBtn.disabled = true;

    // this variable places the initials as an object being used to push into the leaderBoard value to call back to on future game attempts
    var obj = {score, initials: document.querySelector('input[name="initials"]').value}
    console.log(obj);

    leaderBoard.push(obj);
    console.log(leaderBoard);

    localStorage.setItem("ldrBoard", JSON.stringify(leaderBoard));

    // this below 'for' loop is what displays the user scores and initials on the html page as a list item
    for (i = 0; i < leaderBoard.length; i++) {
        var li = document.createElement("li")
        li.textContent = "Player: " + leaderBoard[i].initials + " Score: " + leaderBoard[i].score

        scoreList.appendChild(li);
    }
});