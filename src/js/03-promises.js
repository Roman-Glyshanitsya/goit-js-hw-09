import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', onFormInput);

let dataForm = {};

function onFormInput(event) {
  dataForm[event.target.name] = event.target.value;
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}

function onFormSubmit(event) {
  event.preventDefault();
  let time = Number(dataForm.delay);
  for (let i = 0; i < dataForm.amount; i += 1) {
    setTimeout(() => {
      createPromise(i + 1, time + i * Number(dataForm.step))
        .then(message => Notiflix.Notify.success(message))
        .catch(message => Notiflix.Notify.failure(message));
    }, time + i * Number(dataForm.step));
  }
}
