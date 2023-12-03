import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

let countdownIntervalId = null;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { day, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function updateCountdown() {
  const now = new Date().getTime();
  const endDate = new Date(datetimePicker.value).getTime();
  const remainingTime = endDate - now;

  if (remainingTime < 0) {
    clearInterval(countdownIntervalId);
    alert('Please choose a date in the future.');
    startButton.disabled = true;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(remainingTime);

  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}

function startCountdown() {
  startButton.disabled = true;

  countdownIntervalId = setInterval(() => {
    updateCountdown();
  }, 1000);
}

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] && selectedDates[0] > new Date()) {
      startButton.disabled = false;
    } else {
      alert('Please choose a date in the future.');
      startButton.disabled = true;
    }
  },
});

startButton.addEventListener('click', startCountdown);
