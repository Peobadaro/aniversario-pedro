const countdownEl = document.getElementById("countdown");
const eventDate = new Date("2025-07-15T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "O evento já começou!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}min ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); 