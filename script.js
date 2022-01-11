const quizDB = [
    {
        question: "1: What did Ron call Hermione after Charms class that made her cry?",
        a: "An insufferable know-it-all",
        b: "A nightmare",
        c: "A try-hard",
        d: "A loser",
        ans:"ans2"
    },
    {
        question:"On the night that Harry, Ron and Hermione took on a giant troll – how many house points did they collectively gain for their efforts?",
        a: "45",
        b: "15",
        c: "10",
        d: "5",
        ans:"ans4"
    },
    {
        question:"2: In Harry Potter and the Order of the Phoenix, what did Hermione get Harry and Ron for Christmas?", 
        a: "Sneakoscope",
        b: "Copies of Hogwarts: A History",
        c: "Honeyducks chocolates",
        d: "Homework planners",
        ans:"ans4"
    },
    {
        question: "3: In the books, who was the first to get sorted into their house?",
        a: "Harry",
        b: "Ron",
        c: "Hermione",
        d: "Neville",
        ans:"ans3"
    },
    {
        question:"4: How many O.W.Ls did Ron get when he received his results?", 
        a: "9",
        b: "7",
        c: "8",
        d: "10",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit')

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = quizDB[questionCount].question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    };

    questionCount ++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{

        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length}<h3>
        <button class = "btn" onclick = "location.reload()">Play Again!</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});