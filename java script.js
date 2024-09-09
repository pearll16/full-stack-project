let timer;
let countdown = 5;
let isPaused = true;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);


function startTimer() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(() => {
            if (countdown > 0) {
                countdown--;
                updateDisplay();
            } else {
                clearInterval(timer);
            }
        }, 1000);
        toggleButtons();
    }
}

function pauseTimer() {
    clearInterval(timer);
    isPaused = true;
    toggleButtons();
}

function resetTimer() {
    clearInterval(timer);
    countdown = 5;
    isPaused = true;
    updateDisplay();
    toggleButtons();
}

function updateDisplay() {
    timerDisplay.textContent = countdown;
}

function toggleButtons() {
    startBtn.disabled = !isPaused;
    pauseBtn.disabled = isPaused;
}


