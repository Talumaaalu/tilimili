const categoryButtons = document.querySelectorAll('.category-button');
const submitButton = document.getElementById('submit-button');
const restartButton = document.getElementById('restart-button');
const initialScreen = document.getElementById('initial-screen');
const quizContainer = document.getElementById('quiz-container');
const summaryScreen = document.getElementById('summary-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const finalScoreDisplay = document.getElementById('final-score');
const timerDisplay = document.getElementById('timer');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let countdown;
let selectedCategory = '';
let questions = [];

const quizData = {
    history: [
        {
            question: "Which event marked the beginning of World War I?",
            options: ["Assassination of Archduke Franz Ferdinand", "Signing of the Treaty of Versailles", "The sinking of the Lusitania", "The Battle of Stalingrad"],
            correct: 0
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "Benjamin Franklin"],
            correct: 1
        },
        {
            question: "Which civilization built the Great Pyramids of Giza?",
            options: ["Mesopotamians", "Egyptians", "Greeks", "Romans"],
            correct: 1
        },
        {
            question: "What was the primary cause of the French Revolution?",
            options: ["Economic inequality", "Religious conflict", "Foreign invasion", "Monarchical succession"],
            correct: 0
        },
        {
            question: "Who was the leader of the Soviet Union during World War II?",
            options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"],
            correct: 1
        },
      
    ],
    cinema: [
        {
            question: "Which movie is often considered the first feature-length animated film?",
            options: ["Snow White and the Seven Dwarfs", "Fantasia", "Steamboat Willie", "Gertie the Dinosaur"],
            correct: 0
        },
        {
            question: "Who directed the movie 'Jurassic Park'?",
            options: ["Steven Spielberg", "George Lucas", "James Cameron", "Christopher Nolan"],
            correct: 0
        },
        {
            question: "Which actor is known for portraying James Bond in seven films?",
            options: ["Pierce Brosnan", "Sean Connery", "Roger Moore", "Daniel Craig"],
            correct: 1
        },
        {
            question: "In the movie 'The Wizard of Oz', what color is the yellow brick road?",
            options: ["Yellow", "Red", "Green", "Blue"],
            correct: 0
        },
        {
            question: "Who won the Academy Award for Best Actress for her role in the movie 'La La Land', although the award was mistakenly given to her co-star?",
            options: ["Meryl Streep", "Emma Stone", "Natalie Portman", "Jennifer Lawrence"],
            correct: 1
        },
     
    ],
    geography: [
        {
            question: "Which of the following is the longest river in the world?",
            options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
            correct: 0
        },
        {
            question: "What is the capital city of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: 2
        },
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            options: ["China", "India", "Japan", "South Korea"],
            correct: 2
        },
        {
            question: "Which continent is the largest by land area?",
            options: ["Africa", "Europe", "Asia", "North America"],
            correct: 2
        },
        {
            question: "Which ocean is the largest in the world?",
            options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3
        },
      
    ],
    technology: [
        {
            question: "Who is often credited with inventing the World Wide Web?",
            options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
            correct: 0
        },
        {
            question: "What does 'CPU' stand for in the context of computers?",
            options: ["Central Processing Unit", "Computer Performance Utility", "Central Power Unit", "Computer Processing Utility"],
            correct: 0
        },
        {
            question: "Which company developed the iPhone?",
            options: ["Samsung", "Apple", "Google", "Microsoft"],
            correct: 1
        },
        {
            question: "What type of computer memory is non-volatile and can retain data even when the power is turned off?",
            options: ["RAM", "ROM", "Cache memory", "Virtual memory"],
            correct: 1
        },
        {
            question: "Which technology is used for wireless communication between devices over short distances?",
            options: ["Wi-Fi", "LTE", "NFC", "Bluetooth"],
            correct: 3
        },
       
    ],
    funfacts: [
        {
            question: "What is the only planet in our solar system known to support life?",
            options: ["Mercury", "Venus", "Earth", "Mars"],
            correct: 2
        },
        {
            question: "What is the tallest mammal in the world?",
            options: ["African Elephant", "Giraffe", "Blue Whale", "Polar Bear"],
            correct: 1
        },
        {
            question: "Which country is both an island and a continent?",
            options: ["Australia", "Madagascar", "Greenland", "New Zealand"],
            correct: 0
        },
        {
            question: "Which bird is capable of flying backward?",
            options: ["Eagle", "Hummingbird", "Ostrich", "Penguin"],
            correct: 1
        },
        {
            question: "What is the fastest land animal?",
            options: ["Lion", "Wildebeest","Cheetah",  "Gazelle"],
            correct: 2
        },
        
    ],
};


categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedCategory = button.dataset.category;
        startQuiz();
    });
});

submitButton.addEventListener('click', submitAnswer);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    initialScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    questions = quizData[selectedCategory];
    startTimer();
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(event) {
    const selectedOption = optionsContainer.querySelector('.selected');
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }
    event.target.classList.add('selected');
}

function submitAnswer() {
    const selectedOption = optionsContainer.querySelector('.selected');
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const answerIndex = parseInt(selectedOption.dataset.index);
    const correctIndex = questions[currentQuestionIndex].correct;

    if (answerIndex === correctIndex) {
        score++;
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
        selectedOption.classList.add('correct');
    } else {
        feedback.textContent = 'Incorrect!';
        feedback.style.color = 'red';
        selectedOption.classList.add('incorrect');
        optionsContainer.children[correctIndex].classList.add('correct');
    }

    scoreDisplay.textContent = score;

    setTimeout(() => {
        feedback.textContent = '';
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
            resetTimer();
        } else {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    quizContainer.style.display = 'none';
    summaryScreen.style.display = 'block';
    finalScoreDisplay.textContent = score;
    clearInterval(countdown);
}

function restartQuiz() {
    summaryScreen.style.display = 'none';
    initialScreen.style.display = 'block';
}

function startTimer() {
    timer = 30;
    timerDisplay.textContent = timer;
    countdown = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
            clearInterval(countdown);
            submitAnswer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    startTimer();
}
