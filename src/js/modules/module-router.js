(() => {
  const activities = document.querySelectorAll('[data-activity]');

  if (!activities.length) return;

  const modules = {
    letters: 'letters',
    numbers: 'numbers',
    writing: 'writing',
    stories: 'stories',
    science: 'science',
    art: 'art'
  };

  const openModule = (name) => {
    const moduleName = modules[name];

    if (!moduleName) return;

    document.dispatchEvent(
      new CustomEvent('montessori:module-request', {
        detail: { module: moduleName }
      })
    );
  };

  activities.forEach((activity) => {
    activity.addEventListener('click', () => {
      openModule(activity.dataset.activity);
    });
  });

  document.addEventListener('montessori:module-request', (event) => {
    const { module } = event.detail;

    console.log(`[MONTESSORI] Module requested: ${module}`);
  });
})();
