let counter = 0;
const $clickCount = document.querySelector('.click-count');
const $hot = document.querySelector('.hot-button');

if (!$hot) throw new Error('The $hot query failed');

$hot.addEventListener('click', (event: Event) => {
  if (!$hot || !$clickCount)
    throw new Error('The $hot or $clickCount query failed');
  counter++;
  console.log('event.type:', event.type);
  $clickCount.textContent = `Clicks: ${counter}`;
  switch (true) {
    case counter < 4:
      $hot.className = 'hot-button cold';
      break;
    case counter < 7:
      $hot.classList.add('cool');
      break;
    case counter < 10:
      $hot.classList.add('tepid');
      break;
    case counter < 13:
      $hot.classList.add('warm');
      break;
    case counter < 16:
      $hot.classList.add('hot');
      break;
    default:
      $hot.classList.add('nuclear');
  }
});
