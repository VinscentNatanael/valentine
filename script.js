function scrollDown() {
  document.querySelector(".photo").scrollIntoView({ behavior: "smooth" });
  document.getElementById("music").play();
}

let playing = false;
function toggleMusic() {
  const music = document.getElementById("music");
  const btn = document.querySelector(".music-control");

  if (playing) {
    music.pause();
    btn.innerHTML = "🎵";
  } else {
    music.play();
    btn.innerHTML = "⏸️";
  }
  playing = !playing;
}


/* Typing Effect */
const text = "Happy Valentine & Happy 6 Months Anniversary 🤍";
let i = 0;
setInterval(() => {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
  }
}, 100);

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    if (r.getBoundingClientRect().top < window.innerHeight - 100) {
      r.classList.add("active");
    }
  });
});

/* Countdown */
const startDate = new Date("2025-08-13").getTime();
setInterval(() => {
  const diff = new Date().getTime() - startDate;
  document.getElementById("days").innerText = Math.floor(diff / 86400000);
  document.getElementById("hours").innerText = Math.floor(diff / 3600000) % 24;
  document.getElementById("minutes").innerText = Math.floor(diff / 60000) % 60;
  document.getElementById("seconds").innerText = Math.floor(diff / 1000) % 60;
}, 1000);

/* Love Button */
const texts = [
  "Aku sayang kamu 🤍",
  "Kamu rumah buatku 🏡",
  "Aku serius sama kamu 💍",
  "Terima kasih sudah bertahan 🫶"
];

function loveBurst() {
  document.getElementById("loveText").innerText =
    texts[Math.floor(Math.random() * texts.length)];

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}

/* Auto Hearts */
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 4000);
}, 900);

function openLetter() {
  document.getElementById("letterBox").style.display = "block";
}

function closeLetter() {
  document.getElementById("letterBox").style.display = "none";
}

