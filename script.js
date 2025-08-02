const texts = ["QA Engineer", "Automation Specialist", "Bug Hunter"];
let index = 0, charIndex = 0;
const typingEl = document.getElementById("typing");
function type() {
  if (charIndex < texts[index].length) {
    typingEl.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (charIndex > 0) {
    typingEl.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", type);

particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json');

document.getElementById("year").textContent = new Date().getFullYear();
