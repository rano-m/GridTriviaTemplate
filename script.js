const defaultImage = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWhvZnUwcmd6cWM1ZDlwcnI4bHFvcG92cjlxMTR1amZ0cXEzYWQ5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lnsTFyT6wUzItXsUV5/giphy.webp'; // Add your default image URL here

const questions = {
    "G (Geographic)": {
        200: { 
            text: "What is the shape of the earth?", 
            image: "", 
            options: ["Geoid", "Potato", "Oval", "Spheroid"], 
            answer: "Geoid" 
        },
        400: { 
            text: "Which map projection has an issue with distortion of size along greater magnitudes of latitude?", 
            image: "", 
            options: ["Cassini", "Equirectangular", "Mercator", "Gauss–Krüger"], 
            answer: "Mercator" 
        },
        600: { 
            text: "Maryland falls to 17 and 18 UTM. What does UTM stand for?", 
            image: "", 
            options: ["Universal Transverse Mercator", "Universal Time Measurement", "Universal Time Median", "Universal Transverse Map"], 
            answer: "Universal Transverse Mercator" 
        },
        800: { 
            text: "What is the difference in the circumference of Earth measured around the Equator versus through the poles?", 
            image: "", 
            options: ["62-63 miles", "105-106 miles", "0 miles", "47-48 miles"], 
            answer: "62-63 miles" 
        },
        1000: { 
            text: "What are the approximate coordinates for Chestertown?", 
            image: "", 
            options: ["39.17027778 , -76.06833333", "39.17027778 , 76.06833333", "-39.17027778 , -76.06833333", "-39.17027778 , 76.06833333"], 
            answer: "39.17027778 , -76.06833333" 
        }
    },
    "IS (Information Systems)": {
        200: { 
            text: "What programming language does ArcPro use for query?", 
            image: "", 
            options: ["SQL", "Java", "R", "C++"], 
            answer: "SQL" 
        },
        400: { 
            text: "What is the scripting language of ArcGIS?", 
            image: "", 
            options: ["C++", "Python", "Java", "R"], 
            answer: "Python" 
        },
        600: { 
            text: "Name the option that is NOT a vector data primitive", 
            image: "", 
            options: ["point", "line", "polygon", "tile"], 
            answer: "tile" 
        },
        800: { 
            text: "What is the smallest unit of a raster dataset?", 
            image: "", 
            options: ["point", "pixel", "vector", "fraction"], 
            answer: "pixel" 
        },
        1000: { 
            text: "What is metadata?", 
            image: "", 
            options: ["data about the other data", "a data that has been lost", "cluster of data", "pathway where file is located"], 
            answer: "data about the other data" 
        }
    },
    "GIS History": {
        200: { 
            text: "What is the English town famous for being located in the currently established prime meridian?", 
            image: "", 
            options: ["Oxford", "Salisbury", "Greenwich", "Cambridge"], 
            answer: "Greenwich" 
        },
        400: { 
            text: "What was the primary navigational tool used in nautical navigation in the 18th century?", 
            image: "", 
            options: ["The compass", "Sextant", "Telescope", "Astrolabe"], 
            answer: "Sextant" 
        },
        600: { 
            text: "In which country was a Chinese embassy destroyed in an explosion supposedly due to a mapping error?", 
            image: "", 
            options: ["Yugoslavia", "Poland", "Czechoslovakia", "USSR"], 
            answer: "Yugoslavia" 
        },
        800: { 
            text: "Which two Egyptian cities were used to calculate the circumference of the earth?", 
            image: "", 
            options: ["Thebes & Hamunaptra", "Cairo & Heliopolis", "Alexandria & Syene", "Memphis & Hermopolis"], 
            answer: "Alexandria & Syene" 
        },
        1000: { 
            text: "Which epidemiologist is credited for the first spatial analysis, studying the cholera outbreak in London?", 
            image: "", 
            options: ["John Snow", "Thomas Crapper", "James Watt", "Geoffrey Tandy"], 
            answer: "John Snow" 
        }
    },
    "Mapping Fun Facts": {
        200: { 
            text: "Which fictional setting of J.R.R. Tolkien's 'The Lord of the Rings' has been the subject of several humorous mapping projects?", 
            image: "", 
            options: ["Tamriel", "Middle-earth", "Westeros", "Albion"], 
            answer: "Middle-earth"   
        },
        400: { 
            text: "Which country appears much larger on some map projections than its actual size, thanks to the Mercator projection's distortion?", 
            image: "", 
            options: ["Indonesia", "Ecuador", "Greenland", "Kenya"], 
            answer: "Greenland" 
        },
        600: { 
            text: "Which game utilized real-world GIS and GPS locations in augmented reality to create its gaming experience in 2016?", 
            image: "", 
            options: ["Pokemon GO", "Ingress", "Geocaching", "Minecraft Earth"], 
            answer: "Pokemon GO" 
        },
        800: { 
            text: "Which small village in England is often humorously mistaken for being one of superhero's home city?", 
            image: "", 
            options: ["Gotham", "Smallville", "Bludhaven", "Central City"], 
            answer: "Gotham" 
        },
        1000: { 
            text: "What did medieval European maps mark as 'Here Be Dragons' in their maps?", 
            image: "", 
            options: ["Unexplored or dangerous areas", "Areas with Volcanos", "Places of Dragon Shows", "Criminal Areas"], 
            answer: "Unexplored or dangerous areas" 
        }
    },
    "Washcoll GIS": {
        200: { 
            text: "Which of the college's signature centers are we a part of?", 
            image: "", 
            options: ["CES", "STAR Center", "GEO", "Lit House"], 
            answer: "CES" 
        },
        400: { 
            text: "Name the highest student position in the program", 
            image: "", 
            options: ["Journeyman Leader", "Staff Member", "Student Analyst", "GIS Leader"], 
            answer: "Journeyman Leader" 
        },
        600: { 
            text: "According to the website, what year was the Washington College GIS Program was founded?", 
            image: "", 
            options: ["1999", "2003", "2007", "2011"], 
            answer: "2003" 
        },
        800: { 
            text: "What year did Sean Lynn start as an intern at GIS?", 
            image: "", 
            options: ["2009", "2010", "2013", "2015"], 
            answer: "2010" 
        },
        1000: { 
            text: "What is the new proposed name of the GIS program?", 
            image: "", 
            options: ["GIP", "GIL", "GID", "GEL"], 
            answer: "GIP" 
        }
    }
};

const gridElement = document.getElementById('grid');
const questionModal = document.getElementById('question-modal');
const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');
const optionsElement = document.getElementById('options');
const answerFeedback = document.getElementById('answer-feedback');
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion(gridItem, category, points) {
    const question = questions[category][points];
    questionText.textContent = question.text;
    optionsElement.innerHTML = '';
    answerFeedback.style.display = 'none';

    const shuffledOptions = [...question.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectOption(option, question.answer));
        optionsElement.appendChild(optionButton);
    });

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

function selectOption(selected, correct) {
    const buttons = optionsElement.getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
        if (button.textContent === correct) {
            button.style.backgroundColor = 'green';
            document.getElementById("clap").play();
        } else if (button.textContent === selected) {
            button.style.backgroundColor = 'red';
            document.getElementById("oh-no").play();
        }
    }
    answerFeedback.textContent = selected === correct ? "Correct!" : `Incorrect. The correct answer is: ${correct}`;
    answerFeedback.style.display = 'block';
    document.getElementById("tatatadam").play();
}

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
