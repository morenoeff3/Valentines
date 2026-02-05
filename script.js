// Slide navigation
let current = 0;
const slides = document.querySelectorAll(".slide");

function next() {
  slides[current].classList.remove("active");
  current++;
  if (current >= slides.length) current = slides.length -1;
  slides[current].classList.add("active");
}

// Gift open
function openGift() {
  const gift = document.getElementById("gift");
  gift.src = "gift-open.png";

  setTimeout(() => {
    next();
  }, 800);
}

// Floating hearts & flowers (Valentine's)
const bg = document.querySelector(".floating-bg");
const emojis = ["💖","💗","💘","🌹","🌸","💞","💝"];

setInterval(() => {
  const float = document.createElement("div");
  float.classList.add("float");
  float.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  float.style.left = Math.random() * 100 + "vw";
  float.style.animationDuration = 6 + Math.random() * 6 + "s";
  float.style.fontSize = 16 + Math.random() * 18 + "px";

  bg.appendChild(float);

  setTimeout(() => {
    float.remove();
  }, 12000);
}, 400);

// Yes/No playful interaction with glow
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("click", () => {
    yesBtn.style.transform = "scale(1.5)";
    yesBtn.style.fontSize = "20px";
    yesBtn.style.boxShadow = "0 0 15px #ff6f91, 0 0 30px #ffb3c6, 0 0 45px #ff66aa";

    setTimeout(() => {
      yesBtn.style.transform = "scale(1.2)";
      yesBtn.style.fontSize = "16px";
      yesBtn.style.boxShadow = "0 0 8px #ff6f91, 0 0 15px #ffb3c6";
    }, 400);
  });
}
