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
let targetAngle = 0;
let currentAngle = 0;
let isInitialized = false;

// Smooth animation loop
function animatePointer() {
  // Keep rotation continuous across the -180/180 boundary
  const delta = ((targetAngle - currentAngle + 540) % 360) - 180;
  currentAngle += delta * 0.22; // increase for snappier movement

  pointer.style.transform = `rotate(${currentAngle}deg)`;
  requestAnimationFrame(animatePointer);
}

window.addEventListener("mousemove", (e) => {
  const rect = pointer.getBoundingClientRect();

  // Use true center of the element
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  targetAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);

  if (!isInitialized) {
    currentAngle = targetAngle;
    isInitialized = true;
  }
});

animatePointer();
updateClock();

