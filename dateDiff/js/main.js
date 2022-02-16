import { printError, printREsult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import updateCounter from "./timer.js";

const form = document.getElementById('datecalc')


form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target)

  const firsDate = formData.get('firstDate')
  const secondDate = formData.get('secondDate')

  if (!firsDate || !secondDate) {
    printError('Oooooopppsss - введите текст!!!!')
  } else {
    const dateDiff = getDateDiff(firsDate, secondDate)
    printREsult(dateDiff)
  }
}

//Timer

// Получаем элементы на странице
const start = document.getElementById("start");
const stop = document.getElementById("stop");

start.onclick = function () {
  start.disabled = true;
  stop.disabled = false;
  window.TimerId = window.setInterval(updateCounter, 1000);
}

stop.onclick = function () {
  stop.disabled = true;
  start.disabled = false;
  window.clearInterval(window.TimerId);
}






