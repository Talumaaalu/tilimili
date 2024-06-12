const questions = [
    {
        question: "What is the capital of Canada?",
        answer: "Ottawa"
    },
    {
        question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
        answer: "Harper Lee"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: "Au"
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the longest river in the world?",
        answer: "Nile River"
    },
    {
        question: "What does 'DNA' stand for?",
        answer: "Deoxyribonucleic Acid"
    },
    {
        question: "Who is known as the father of modern physics?",
        answer: "Albert Einstein"
    },
    {
        question: "What is the powerhouse of the cell?",
        answer: "Mitochondria"
    },
    {
        question: "Which Shakespeare play features the characters Romeo and Juliet?",
        answer: "Romeo and Juliet"
    },
    {
        question: "In which year did the Titanic sink?",
        answer: "1912"
    },
    {
        question: "Who discovered penicillin?",
        answer: "Alexander Fleming"
    },
    {
        question: "What is the chemical formula for water?",
        answer: "H2O"
    },
    {
        question: "Who was the first person to step on the moon?",
        answer: "Neil Armstrong"
    },
    {
        question: "What is the largest organ in the human body?",
        answer: "Skin"
    },
    {
        question: "What is the speed of light in a vacuum?",
        answer: "Approximately 299,792 kilometers per second"
    },
    {
        question: "Who is the author of '1984'?",
        answer: "George Orwell"
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        answer: "Nitrogen"
    },
    {
        question: "What is the capital of Japan?",
        answer: "Tokyo"
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for iron?",
        answer: "Fe"
    },
    {
        question: "What is the currency of France?",
        answer: "Euro"
    },
    {
        question: "Who invented the telephone?",
        answer: "Alexander Graham Bell"
    },
    {
        question: "Which planet is closest to the sun?",
        answer: "Mercury"
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        answer: "F. Scott Fitzgerald"
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: "Pacific Ocean"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        answer: "Michelangelo"
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue Whale"
    },
    {
        question: "Who discovered gravity?",
        answer: "Sir Isaac Newton"
    },
    {
        question: "What is the chemical symbol for silver?",
        answer: "Ag"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answer: "Marie Curie"
    },
    {
        question: "What is the capital of Brazil?",
        answer: "Brasília"
    },
    {
        question: "What is the main ingredient in guacamole?",
        answer: "Avocado"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        answer: "J.D. Salinger"
    },
    {
        question: "What is the tallest mountain in the world?",
        answer: "Mount Everest"
    },
    {
        question: "Who composed the famous symphony 'Symphony No. 9'?",
        answer: "Ludwig van Beethoven"
    },
    {
        question: "What is the study of earthquakes called?",
        answer: "Seismology"
    },
    {
        question: "Who developed the theory of evolution by natural selection?",
        answer: "Charles Darwin"
    },
    {
        question: "What is the chemical symbol for sodium?",
        answer: "Na"
    },
    {
        question: "Who painted 'Starry Night'?",
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the currency of China?",
        answer: "Renminbi (Yuan)"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answer: "Jane Austen"
    },
    {
        question: "What is the capital of India?",
        answer: "New Delhi"
    },
    {
        question: "Who invented the light bulb?",
        answer: "Thomas Edison"
    },
    {
        question: "What is the smallest bone in the human body?",
        answer: "Stapes (in the ear)"
    },
    {
        question: "Who discovered the theory of relativity?",
        answer: "Albert Einstein"
    },
    {
        question: "What is the chemical symbol for potassium?",
        answer: "K"
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        answer: "Margaret Thatcher"
    },
    {
        question: "What is the chemical symbol for calcium?",
        answer: "Ca"
    },
    {
        question: "Who wrote 'The Adventures of Tom Sawyer'?",
        answer: "Mark Twain"
    }
];


const questionsContainer = document.querySelector('.questions');


questions.forEach((q, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
        <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
        <div class="answer">Answer: ${q.answer}</div>
        <button class="show-answer">Show Answer</button>
    `;
    questionsContainer.appendChild(questionElement);
});

const showAnswerButtons = document.querySelectorAll('.show-answer');
showAnswerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.previousElementSibling;
        answer.style.display = 'block';
        button.style.display = 'none';
    });
});
