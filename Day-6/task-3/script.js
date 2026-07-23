
const room = document.getElementById('room');
const lightEmoji = document.getElementById('lightEmoji');
const lightText = document.getElementById('lightText');
const toggleBtn = document.getElementById('toggleBtn');
let isLightOn = true;  
function updateLight() {
    if (isLightOn) {
        room.className = 'container on';
        lightEmoji.textContent = '💡';
        lightText.textContent = 'ON';
        toggleBtn.textContent = 'Turn OFF';
        toggleBtn.className = 'on';
        document.body.style.background = '#f0f2f5';
    } else {
        room.className = 'container off';
        lightEmoji.textContent = '🌙';
        lightText.textContent = 'OFF';
        toggleBtn.textContent = 'Turn ON';
        toggleBtn.className = 'off';
        document.body.style.background = '#1a1a1a';
    }
}
toggleBtn.addEventListener('click', function() {
    isLightOn = !isLightOn;  
    updateLight();
});
document.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleBtn.click();
    }
});

console.log('Press SPACE or ENTER to toggle light');
updateLight();