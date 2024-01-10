function  updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().padStart(2, '0');

  const timeElement = document.getElementById('time');
  timeElement.textContent = '$(hours):$(minutes):$(seconds)';
}
// Update the clock every second
setInterval(updateClock, 1000);

//initial call to displey the clock immediately
updateClock()