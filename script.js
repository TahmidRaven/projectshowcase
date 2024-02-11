const quotes = [
    "This is my last message to you: in sorrow, seek happiness.",
    "I cannot make you understand. I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.",
    "The soul becomes dyed with the colour of its thoughts.",
    "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
    "Waste no more time arguing about what a good man should be. Be one.",
    "How about if I sleep a little bit longer and forget all this nonsense",
    "Time is a drug. Too much of it kills you.",
    "You must not pay too much attention to opinions. The written word is unalterable, and opinions are often only an expression of despair.",
    "I can see the sun, but even if I cannot see the sun, I know that it exists. And to know that the sun is there - that is living.",
    "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "Dwell on the beauty of life. Watch the stars, and see yourself running with them."
];

const fontFamilies = ['Space Grotesk', 'Times New Roman', 'Nitti', 'arial', 'sans-serif'];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomFontFamily() {
    return fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
}

function displayRandomQuote(containerId) {
    const quoteTextId = "quoteText" + containerId;
    const quoteBox = document.getElementById("quoteBox" + containerId);
    const randomQuote = getRandomQuote();
    const randomFontFamily = getRandomFontFamily();

    quoteText = quoteBox.querySelector('.quote-text');
    quoteText.textContent = randomQuote;
    quoteBox.style.fontFamily = randomFontFamily;
}

function changeColor(containerId, textColor, bgColor, borderColor, fontColor) {
    const quoteBox = document.getElementById("quoteBox" + containerId);
    quoteBox.style.color = textColor;
    quoteBox.style.backgroundColor = bgColor;
    quoteBox.style.borderColor = borderColor;
    document.body.style.color = fontColor; 
}

displayRandomQuote(1);
changeColor(1, '#FE7A36', '#3652AD', '#280274', '#E9F6FF'); // coolor 3



// hero converter

function convert() {
    const inputValue = parseFloat(document.getElementById('conversionValue').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;
    let unit;

    if (conversionType === 'kilograms') {
        result = inputValue * 2.2046; // Kilograms to Pounds
        unit = 'lb';
    } else {
        result = inputValue * 0.4536; // Pounds to Kilograms
        unit = 'kg';
    }

    document.getElementById('conversionResult').textContent = result.toFixed(2);
    document.getElementById('conversionUnit').textContent = unit;
}


// maxminsum
function calculate() {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(Number);
    
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;
    const reverseOrder = numbers.slice().reverse();
    
    const resultHTML = `
        <p>Max: ${max}</p>
        <p>Min: ${min}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${avg}</p>
        <p>Reverse Order: ${reverseOrder.join(', ')}</p>
    `;
    
    document.getElementById('results').innerHTML = resultHTML;
}



// MagicBox

document.getElementById('clearBtn').addEventListener('click', clearAll);
document.getElementById('toggleCaseBtn').addEventListener('click', toggleCase);
document.getElementById('sortBtn').addEventListener('click', sortLines);
document.getElementById('reverseBtn').addEventListener('click', reverseLines);
document.getElementById('stripBlankBtn').addEventListener('click', stripBlankLines);
document.getElementById('addNumbersBtn').addEventListener('click', addNumbers);
document.getElementById('shuffleBtn').addEventListener('click', shuffleLines);

function clearAll() {
    document.getElementById('textArea').value = '';
}

function toggleCase() {
    var textArea = document.getElementById('textArea');
    var currentText = textArea.value;
    if (currentText === currentText.toUpperCase()) {
        textArea.value = currentText.toLowerCase();
    } else {
        textArea.value = currentText.toUpperCase();
    }
}

function sortLines() {
    var textArea = document.getElementById('textArea');
    var lines = textArea.value.split('\n');
    lines.sort();
    textArea.value = lines.join('\n');
}

function reverseLines() {
    var textArea = document.getElementById('textArea');
    var lines = textArea.value.split('\n');
    lines.reverse();
    textArea.value = lines.join('\n');
}

function stripBlankLines() {
    var textArea = document.getElementById('textArea');
    var lines = textArea.value.split('\n');
    lines = lines.filter(line => line.trim() !== '');
    textArea.value = lines.join('\n');
}

function addNumbers() {
    var textArea = document.getElementById('textArea');
    var lines = textArea.value.split('\n');
    for (var i = 0; i < lines.length; i++) {
        lines[i] = (i + 1) + '. ' + lines[i];
    }
    textArea.value = lines.join('\n');
}
function removeNumbers() {
    var textArea = document.getElementById('textArea');
    var lines = textArea.value.split('\n');
    for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(/^\d+\.\s*/, ''); // Replace the numbers like "1. ", "2. ", etc.
    }
    textArea.value = lines.join('\n');
}

document.getElementById('removeNumbersBtn').addEventListener('click', removeNumbers);


function shuffleLines() {
    var textArea = document.getElementById('textArea');
    var lines = textArea.value.split('\n');
    for (var i = lines.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = lines[i];
        lines[i] = lines[j];
        lines[j] = temp;
    }
    textArea.value = lines.join('\n');
}
