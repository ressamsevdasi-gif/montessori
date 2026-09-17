(() => {
  const splash = document.querySelector('[data-splash]');
  const app = document.querySelector('[data-app]');

  if (!splash || !app) return;

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const revealApp = () => {
    splash.classList.add('is-hidden');
    app.classList.add('is-ready');

    window.setTimeout(() => {
      splash.hidden = true;
    }, reduceMotion ? 0 : 420);
  };

  if (document.readyState === 'complete') {
    window.setTimeout(revealApp, reduceMotion ? 0 : 350);
  } else {
    window.addEventListener('load', () => {
      window.setTimeout(revealApp, reduceMotion ? 0 : 350);
    }, { once: true });
  }
})();
