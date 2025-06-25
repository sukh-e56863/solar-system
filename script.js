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

// Shooting Star Function
function createShootingStar(x, y) {
  const star = document.createElement('div');
  star.className = 'shooting-star';

  // If x and y are provided (on click), position from click
  if (x !== undefined && y !== undefined) {
    star.style.left = x + 'px';
    star.style.top = y + 'px';
  } else {
    // Otherwise random position
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight * 0.8 + 'px';
  }

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1500);
}

// Auto shooting stars
setInterval(() => {
  if (Math.random() > 0.5) createShootingStar();
}, 3000);

// On click/tap: shooting star from that point
document.addEventListener('click', (e) => {
  createShootingStar(e.clientX, e.clientY);
});

// Music fallback
const music = document.getElementById('bgMusic');
music.play().catch(() => {
  document.body.addEventListener('click', () => {
    music.play();
  }, { once: true });
});
