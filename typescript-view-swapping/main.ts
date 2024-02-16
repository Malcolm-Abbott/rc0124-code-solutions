const $tabContainer = document.querySelector(
  '.tab-container'
) as HTMLDivElement;
const $tabs = document.querySelectorAll('.tab') as NodeListOf<Element>;
const $views = document.querySelectorAll('.view') as NodeListOf<Element>;

if (!$tabs) throw new Error('The $tabs query failed');
if (!$views) throw new Error('The $views query failed');

$tabContainer?.addEventListener('click', (event: Event): void => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    $tabs.forEach((tab: Element): void => {
      if ($eventTarget === tab) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    });

    const $eventTargetDataset = $eventTarget.dataset.view;

    $views.forEach((view: Element): void => {
      if (view.getAttribute('data-view') === $eventTargetDataset) {
        view.className = 'view';
      } else {
        view.className = 'view hidden';
      }
    });
  }
});
