import {Howl} from 'howler';

const sound = new Howl({
  src: ['sound.mp3']
});

const year = document.getElementById("year");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCounter() {
  const deadline = document.getElementById("deadline");
  const deadlineTime = new Date (deadline.value);
  const currentTime = new Date();
  const dist = deadlineTime - currentTime;

  if (dist <= 0){
    clearInterval(window.TimerId);
    sound.play();
    alert("Таймер сработал!");
  } else {
    const toDays = Math.floor(dist / 1000 / 60 / 60 / 24);
    const toHours = Math.floor(dist / 1000 / 60 / 60) % 24;
    const toMinutes = Math.floor(dist / 1000 / 60) % 60;
    const toSeconds = Math.floor(dist / 1000) % 60;

    days.innerText = toDays;
    hours.innerText = toHours < 10 ? "0" + toHours : toHours;
    minutes.innerText = toMinutes < 10 ? "0" + toMinutes : toMinutes;
    seconds.innerText = toSeconds < 10 ? "0" + toSeconds : toSeconds;
  }
}

export default updateCounter;
