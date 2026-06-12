function showMessage() {
  const message = document.getElementById("loveMessage");
  message.classList.remove("hidden");

  for (let i = 0; i < 20; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = ["💛", "💕", "🤍", "✨", "💖"][Math.floor(Math.random() * 5)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.fontSize = Math.random() * 18 + 18 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// background hearts
setInterval(createHeart, 700);
