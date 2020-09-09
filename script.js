let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function clock() {
  let h = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  if (h < 10) {
    h = '0' + h;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }

  hour.textContent = h;
  minutes.textContent = min;
  seconds.textContent = sec;
}
let interval = setInterval(clock, 1000);

let d = new Date();
let month = d.getMonth() + 1;

if (month < 10) {
  month = '0' + month;
}

let date = `${d.getDate()}:${month}:${d.getFullYear()}`;

document.getElementById('date').textContent = date;
