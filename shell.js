/**
 * MalaySMP — shared inner-page shell
 * Injected by each page via: buildPage({ title, content })
 */
function buildPage({ pageTitle, htmlContent }) {
  // Apply background from config
  const bg  = document.getElementById('bg');
  const img = new Image();
  img.onload  = () => { bg.style.backgroundImage = `url('${CONFIG.background}')`; bg.classList.add('loaded'); };
  img.onerror = () => { bg.style.background = CONFIG.backgroundFallback; bg.classList.add('loaded'); };
  img.src = CONFIG.background;

  document.title = `${pageTitle} — ${CONFIG.siteName}`;

  // Audio
  const bgm = document.getElementById('bgm');
  const btn = document.getElementById('audio-btn');
  let audioStarted = false; let muted = false;
  bgm.src = CONFIG.music; bgm.volume = CONFIG.volume;
  function startAudio() {
    if (audioStarted) return;
    bgm.play().then(() => { audioStarted = true; }).catch(() => {});
  }
  document.addEventListener('click',      startAudio, { once: true });
  document.addEventListener('touchstart', startAudio, { once: true });
  document.addEventListener('keydown',    startAudio, { once: true });
  btn.addEventListener('click', e => {
    e.stopPropagation(); startAudio();
    muted = !muted; bgm.muted = muted;
    btn.textContent = muted ? '♪̶' : '♪';
    btn.classList.toggle('muted', muted);
  });

  // Nav active state
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('href') === window.location.pathname.split('/').pop()) {
      l.classList.add('active');
    }
  });

  // Page transition out
  document.querySelectorAll('a:not([target])').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#')) return;
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => { window.location.href = href; }, 450);
    });
  });
}
