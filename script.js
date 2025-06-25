// Twinkling Stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 150; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (2 + Math.random() * 4) + 's';
  star.style.animationDelay = Math.random() * 5 + 's';
  starsContainer.appendChild(star);
}

// Shooting Stars PNG based
function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star';

  const top = Math.random() * 70 + 'vh';
  const left = Math.random() * 70 + 'vw';

  star.style.top = top;
  star.style.left = left;

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1500);
}

setInterval(() => {
  if (Math.random() > 0.5) createShootingStar();
}, 3000);

// Music fallback
const music = document.getElementById('bgMusic');
music.play().catch(() => {
  document.body.addEventListener('click', () => {
    music.play();
  }, { once: true });
});
