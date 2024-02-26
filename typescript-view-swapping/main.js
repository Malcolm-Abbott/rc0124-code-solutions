'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');
if (!$tabs) throw new Error('The $tabs query failed');
if (!$views) throw new Error('The $views query failed');
$tabContainer?.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget.matches('.tab')) {
    $tabs.forEach((tab) => {
      if ($eventTarget === tab) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    });
    const $eventTargetDataset = $eventTarget.dataset.view;
    $views.forEach((view) => {
      if (view.getAttribute('data-view') === $eventTargetDataset) {
        view.className = 'view';
      } else {
        view.className = 'view hidden';
      }
    });
  }
});
