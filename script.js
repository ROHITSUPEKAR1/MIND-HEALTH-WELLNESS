// GSAP Animations

// Continuous rotation for visual effect
gsap.to("#box", {
  rotation: 360,
  duration: 20,
  repeat: -1,
  ease: "linear",
  transformOrigin: "50% 50%"
});

// Intro Animations

gsap.from(".left-content h1", { duration: 1, x: -100, opacity: 0 });
gsap.from(".left-content h2", { duration: 1, x: -100, opacity: 0, delay: 0.3 });
gsap.from(".left-content p", { duration: 1, x: -100, opacity: 0, delay: 0.6 });

gsap.from(".right-content img", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});

// Hypnosis Services List
const services = [
  { title: "Overcome Anxiety", img: "https://img.icons8.com/color/96/mental-state.png" },
  { title: "Improve Sleep", img: "https://img.icons8.com/color/96/sleeping-in-bed.png" },
  { title: "Boost Confidence", img: "/assets/Boost Confidence.png" },
  { title: "Conquer Fears", img: "/assets/Conquer Fears.png" },
  { title: "Break Habits", img: "https://img.icons8.com/color/96/no-smoking.png" },
  { title: "Enhance Focus", img: "/assets/Enhance Focus.png" },
  { title: "Stress Management", img: "/assets/Stress Management.png" },
  { title: "Emotional Healing", img: "/assets/emotitional_healing.png" },
  { title: "Memory Improvement", img: "https://img.icons8.com/color/96/brain.png" },
  { title: "Goal Motivation", img: "/assets/goal_motivation.png" },
];

const container = document.getElementById("cardContainer");

services.forEach(service => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${service.img}" alt="${service.title}" />
    <h3>${service.title}</h3>
  `;
  container.appendChild(card);
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');

    faqItems.forEach(other => {
      if (other !== item) {
        other.classList.remove('active');
      }
    });
  });
});
