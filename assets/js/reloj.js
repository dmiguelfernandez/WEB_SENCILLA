let reloj = document.querySelector(".clock_time");

function updateClock() {
  const now = new Date();
  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");
  reloj.innerHTML = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock(); // inicial
