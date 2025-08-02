
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

// Scroll animations
const fadeElems = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeElems.forEach(el => observer.observe(el));

// Parallax effect for floating icons
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelectorAll(".float-icon").forEach((icon, i) => {
    icon.style.transform = `translateY(${scrollY * 0.1 * (i+1)}px)`;
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
