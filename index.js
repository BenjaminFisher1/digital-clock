const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

const pointer = document.getElementById('pointer');

window.addEventListener('mousemove', (e) => {
  // 1. Get the bounding box of the element
  const rect = pointer.getBoundingClientRect();
  
  // 2. Find the center point of the element
  const elementCenterX = rect.left + rect.width / 2;
  const elementCenterY = rect.top + rect.height / 2;

  // 3. Calculate distance between mouse and element center
  const deltaX = e.clientX - elementCenterX;
  const deltaY = e.clientY - elementCenterY;

  // 4. Calculate angle in radians and convert to degrees
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  // 5. Apply the rotation
  pointer.style.transform = `rotate(${angle}deg)`;
});


updateClock();

