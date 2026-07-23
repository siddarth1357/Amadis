
const countDisplay = document.getElementById('countDisplay');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;  
function updateDisplay() {
    countDisplay.textContent = count;
    
    // Change color based on value
    if (count > 0) {
        countDisplay.style.color = 'green';
    } else if (count < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = '#333';
    }
}


increaseBtn.addEventListener('click', function() {
    count = count + 1;      
    updateDisplay();      
});


decreaseBtn.addEventListener('click', function() {
    count = count - 1;      
    updateDisplay();        
});
resetBtn.addEventListener('click', function() {
    count = 0;              
    updateDisplay();        
});
document.addEventListener('keydown', function(e) {
    if (e.key === '+') {
        increaseBtn.click();
    } else if (e.key === '-') {
        decreaseBtn.click();
    } else if (e.key === 'r' || e.key === 'R') {
        resetBtn.click();
    }
});

console.log('Keyboard: + = increase, - = decrease, r = reset');