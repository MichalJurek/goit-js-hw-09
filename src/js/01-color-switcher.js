function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let colorChangeIntervalId = null;

const startColorChange = () => {
  colorChangeIntervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtn.disabled = true;
};

const stopColorChange = () => {
  clearInterval(colorChangeIntervalId);
  startBtn.disabled = false;
};

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);
