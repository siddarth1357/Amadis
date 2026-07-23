
const colorBox = document.getElementById('colorBox');

const redBtn = document.getElementById('redBtn');
const blueBtn = document.getElementById('blueBtn');
const greenBtn = document.getElementById('greenBtn');
const randomBtn = document.getElementById('randomBtn');

console.log(colorBox);  
console.log(redBtn);    
redBtn.addEventListener('click', function() {
    colorBox.style.backgroundColor = 'red';
    console.log('Changed to red!');
});
blueBtn.addEventListener('click', function() {
    colorBox.style.backgroundColor = 'blue';
    console.log('Changed to blue!');
});


greenBtn.addEventListener('click', function() {
    colorBox.style.backgroundColor = 'green';
    console.log('Changed to green!');
});

randomBtn.addEventListener('click', function() {
    
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = randomColor;
    console.log('Changed to random color!', randomColor);
});

