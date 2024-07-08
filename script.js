const defaultImage = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWhvZnUwcmd6cWM1ZDlwcnI4bHFvcG92cjlxMTR1amZ0cXEzYWQ5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lnsTFyT6wUzItXsUV5/giphy.webp'; // Add your default image URL here

const questions = {
    "Category 1": {
        100: { text: "This is the question for Category 1 - 100 points", image: "", answer: "This is the answer for Category 1 - 100 points" },
        200: { text: "This is the question for Category 1 - 200 points", image: "", answer: "This is the answer for Category 1 - 200 points" },
        300: { text: "This is the question for Category 1 - 300 points", image: "", answer: "This is the answer for Category 1 - 300 points" },
        400: { text: "This is the question for Category 1 - 400 points", image: "", answer: "This is the answer for Category 1 - 400 points" },
        500: { text: "This is the question for Category 1 - 500 points", image: "", answer: "This is the answer for Category 1 - 500 points" },
    },
    "Category 2": {
        100: { text: "This is the question for Category 2 - 100 points", image: "", answer: "This is the answer for Category 2 - 100 points" },
        200: { text: "This is the question for Category 2 - 200 points", image: "", answer: "This is the answer for Category 2 - 200 points" },
        300: { text: "This is the question for Category 2 - 300 points", image: "", answer: "This is the answer for Category 2 - 300 points" },
        400: { text: "This is the question for Category 2 - 400 points", image: "", answer: "This is the answer for Category 2 - 400 points" },
        500: { text: "This is the question for Category 2 - 500 points", image: "", answer: "This is the answer for Category 2 - 500 points" },
    },
    "Category 3": {
        100: { text: "This is the question for Category 3 - 100 points", image: "", answer: "This is the answer for Category 3 - 100 points" },
        200: { text: "This is the question for Category 3 - 200 points", image: "", answer: "This is the answer for Category 3 - 200 points" },
        300: { text: "This is the question for Category 3 - 300 points", image: "", answer: "This is the answer for Category 3 - 300 points" },
        400: { text: "This is the question for Category 3 - 400 points", image: "", answer: "This is the answer for Category 3 - 400 points" },
        500: { text: "This is the question for Category 3 - 500 points", image: "", answer: "This is the answer for Category 3 - 500 points" },
    },
    "Category 4": {
        100: { text: "This is the question for Category 4 - 100 points", image: "", answer: "This is the answer for Category 4 - 100 points" },
        200: { text: "This is the question for Category 4 - 200 points", image: "", answer: "This is the answer for Category 4 - 200 points" },
        300: { text: "This is the question for Category 4 - 300 points", image: "", answer: "This is the answer for Category 4 - 300 points" },
        400: { text: "This is the question for Category 4 - 400 points", image: "", answer: "This is the answer for Category 4 - 400 points" },
        500: { text: "This is the question for Category 4 - 500 points", image: "", answer: "This is the answer for Category 4 - 500 points" },
    },
    "Category 5": {
        100: { text: "This is the question for Category 5 - 100 points", image: "", answer: "This is the answer for Category 5 - 100 points" },
        200: { text: "This is the question for Category 5 - 200 points", image: "", answer: "This is the answer for Category 5 - 200 points" },
        300: { text: "This is the question for Category 5 - 300 points", image: "", answer: "This is the answer for Category 5 - 300 points" },
        400: { text: "This is the question for Category 5 - 400 points", image: "", answer: "This is the answer for Category 5 - 400 points" },
        500: { text: "This is the question for Category 5 - 500 points", image: "", answer: "This is the answer for Category 5 - 500 points" },
    },
};

const gridElement = document.getElementById('grid');
const questionModal = document.getElementById('question-modal');
const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');
const answerText = document.getElementById('answer-text');
const revealAnswerButton = document.getElementById('reveal-answer-button');
const closeButton = document.getElementById('close-button');
const askFriendButton = document.getElementById('ask-friend-button');
const sliceOptionsButton = document.getElementById('slice-options-button');
const googleSearchButton = document.getElementById('google-search-button');

function createGrid() {
    let categoryIndex = 1;
    for (const category in questions) {
        for (const points in questions[category]) {
            const gridItem = document.createElement('div');
            gridItem.className = `grid-item category-${categoryIndex}`;
            gridItem.innerHTML = `<div>${category}</div><div>${points} points</div>`;
            gridItem.addEventListener('click', () => displayQuestion(gridItem, category, points));
            gridElement.appendChild(gridItem);
        }
        categoryIndex++;
    }
}

function displayQuestion(gridItem, category, points) {
    const question = questions[category][points];
    questionText.textContent = question.text;
    answerText.textContent = question.answer;
    answerText.style.display = 'none';
    revealAnswerButton.style.display = 'block';

    if (question.image) {
        questionImage.src = question.image || defaultImage;
        questionImage.style.display = 'block';
    } else {
        questionImage.src = defaultImage;
        questionImage.style.display = 'block';
    }
    questionModal.style.display = 'flex';

    gridItem.classList.add('used');
}

revealAnswerButton.addEventListener('click', () => {
    answerText.style.display = 'block';
    revealAnswerButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
    questionModal.style.display = 'none';
});

askFriendButton.addEventListener('click', () => {
    alert("You chose to ask a friend!");
});

sliceOptionsButton.addEventListener('click', () => {
    alert("You chose to slice options!");
});

googleSearchButton.addEventListener('click', () => {
    const query = questionText.textContent;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
});

window.addEventListener('click', (event) => {
    if (event.target === questionModal) {
        questionModal.style.display = 'none';
    }
});

createGrid();