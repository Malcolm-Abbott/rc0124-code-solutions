const $bulb = document.querySelector('.bulb') as HTMLElement;
const $body = document.querySelector('body') as HTMLElement;

if (!$body) throw new Error('The $body query failed');

$bulb?.addEventListener('click', (): void => {
  $bulb.classList.toggle('night');
  $body.classList.toggle('nightfall');
});
