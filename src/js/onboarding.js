(() => {
  const onboarding = document.querySelector('[data-onboarding]');
  const startButton = document.querySelector('[data-start-exploring]');

  if (!onboarding || !startButton) return;

  const STORAGE_KEY = 'montessori-onboarding-complete';

  const complete = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Local storage unavailable: continue without persistence.
    }

    onboarding.classList.add('is-hidden');

    window.setTimeout(() => {
      onboarding.hidden = true;
    }, 320);
  };

  let completed = false;

  try {
    completed = localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    completed = false;
  }

  if (completed) {
    onboarding.hidden = true;
    return;
  }

  startButton.addEventListener('click', complete);
})();
