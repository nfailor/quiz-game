// the questions variable is what is being used to store the question and answer information. "isCorrect" is being used to determine which choice is correct among the incorrect options, used for checkAns function in the script.js file

var questions = [ {
        q: "Javascript is a(n) _______ language?",
        a: [{ text: " Object-oriented", isCorrect: true },
        { text: " Object-based", isCorrect: false },
        { text: " Procedural", isCorrect: false },
        { text: " None of the above", isCorrect: false }
        ]
    }, 
    {
        q: "Which of the following keywords is used to define a variable in Javascript?",
        a: [{ text: " var", isCorrect: false },
        { text: " let", isCorrect: false },
        { text: " Both A and B", isCorrect: true },
        { text: " None of the above", isCorrect: false }
        ]
    }, 
    {
        q: "Which of the following methods is used to access HTML elements using Javascript?",
        a: [{ text: " getElementbyId()", isCorrect: false },
        { text: " getElementsByClassName()", isCorrect: false },
        { text: " Both A and B", isCorrect: true },
        { text: " None of the above", isCorrect: false }
        ]
    },
    {
        q: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        a: [{ text: " Throws an error", isCorrect: false },
        { text: " Ignores the statements", isCorrect: true },
        { text: " Gives a warning", isCorrect: false },
        { text: " None of the above", isCorrect: false }
        ]
    },
    {
        q: "Which of the following methods can be used to display data in some form using Javascript?",
        a: [{ text: " document.write()", isCorrect: false },
        { text: " console.log()", isCorrect: false },
        { text: " window.alert()", isCorrect: false },
        { text: " All of the above", isCorrect: true }
        ]
    }
]