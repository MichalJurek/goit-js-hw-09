document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const initialDelay = +this.elements.delay.value;
  const step = +this.elements.step.value;
  const amount = +this.elements.amount.value;

  let currentDelay = initialDelay;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += step;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    const timerId = setTimeout(() => {
      clearTimeout(timerId); // Clear the timeout before resolving or rejecting

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
