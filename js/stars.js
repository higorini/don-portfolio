(function () {
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");

  const isMobile = navigator.maxTouchPoints > 0;
  const COUNT = isMobile
    ? Math.floor(Math.random() * 6) + 35
    : Math.floor(Math.random() * 21) + 60;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const particles = [];
  let animationId = null;
  let lastTime = 0;
  let resizeTimer = null;
  const shootingStars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticle() {
    return {
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      radius: rand(0.5, 1.5),
      opacity: rand(0.1, 0.6),
      speedX: rand(-0.3, 0.3),
      speedY: rand(-0.3, 0.3),
      opacitySpeed: rand(0.002, 0.008),
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      light: Math.random() > 0.7,
    };
  }

  function init() {
    for (let i = 0; i < COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function update() {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      p.opacity += p.opacitySpeed * p.opacityDir;
      if (p.opacity >= 0.6) { p.opacity = 0.6; p.opacityDir = -1; }
      if (p.opacity <= 0.1) { p.opacity = 0.1; p.opacityDir = 1; }
    }
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < -200 || s.x > canvas.width + 200 || s.y > canvas.height + 200) {
        shootingStars.splice(i, 1);
      }
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(212, 160, 23, 1)";
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (p.light) continue;
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "rgba(242, 201, 76, 1)";
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (!p.light) continue;
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < shootingStars.length; i++) {
      const s = shootingStars[i];
      const tailX = s.x - (s.vx / s.speed) * s.length;
      const tailY = s.y - (s.vy / s.speed) * s.length;
      const base = s.color === 1 ? "242, 201, 76" : "212, 160, 23";
      const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
      grad.addColorStop(0, `rgba(${base}, 0)`);
      grad.addColorStop(1, `rgba(${base}, ${s.opacity})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(s.x, s.y);
      ctx.stroke();
    }
  }

  function animate(timestamp) {
    animationId = requestAnimationFrame(animate);
    if (timestamp - lastTime < 33) return;
    lastTime = timestamp;
    update();
    drawParticles();
  }

  function start() {
    if (animationId) return;
    animationId = requestAnimationFrame(animate);
  }

  function createShootingStar() {
    const edge = Math.floor(Math.random() * 3);
    let x, y, vx, vy;
    const speed = rand(8, 16);
    if (edge === 0) {
      x = rand(0, canvas.width);
      y = -10;
      vx = rand(-speed * 0.6, speed * 0.6);
      vy = Math.sqrt(speed * speed - vx * vx);
    } else if (edge === 1) {
      x = -10;
      y = rand(0, canvas.height * 0.5);
      vy = rand(speed * 0.4, speed * 0.9);
      vx = Math.sqrt(speed * speed - vy * vy);
    } else {
      x = canvas.width + 10;
      y = rand(0, canvas.height * 0.5);
      vy = rand(speed * 0.4, speed * 0.9);
      vx = -Math.sqrt(speed * speed - vy * vy);
    }
    return {
      x, y, vx, vy, speed,
      length: rand(80, 180),
      opacity: rand(0.7, 0.9),
      color: Math.random() > 0.7 ? 1 : 0,
    };
  }

  function spawnShower() {
    const count = Math.floor(rand(1, 5));
    for (let i = 0; i < count; i++) {
      setTimeout(() => shootingStars.push(createShootingStar()), rand(0, 600));
    }
  }

  function scheduleNextShower() {
    setTimeout(() => {
      spawnShower();
      scheduleNextShower();
    }, rand(10000, 60000));
  }

  function stop() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else if (!reducedMotion) {
      start();
    }
  });

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      if (reducedMotion) drawParticles();
    }, 150);
  });

  resize();
  init();

  if (reducedMotion) {
    drawParticles();
  } else {
    start();
    setTimeout(() => {
      spawnShower();
      scheduleNextShower();
    }, 4000);
  }
})();
