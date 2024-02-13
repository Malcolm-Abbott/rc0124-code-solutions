const $taskList = document.querySelector('.task-list');

if (!$taskList) throw new Error('The $taskList query failed');

$taskList.addEventListener('click', (event) => {
  const $eventTarget = event.target as HTMLElement;

  console.log('$eventTarget:', $eventTarget);
  console.log('$eventTarget.tagName:', $eventTarget.tagName);

  if ($eventTarget.tagName === 'BUTTON') {
    const $closestEventTargetLi = $eventTarget.closest('.task-list-item');

    if (!$closestEventTargetLi)
      throw new Error('Invalid $closestEventTargetLi query failed');

    $closestEventTargetLi.remove();
  }
});
