const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

stopBtnRef.disabled = true;

function onStartBtnClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
}

function onStopBtnClick() {
  clearInterval(intervalId);
  stopBtnRef.disabled = true;
  startBtnRef.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
