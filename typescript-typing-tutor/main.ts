const $span = document.querySelectorAll('span') as NodeListOf<HTMLElement>;
const $h2 = document.querySelector('h2');
let i: number = 0;
let counterError = 0;

if (!$span) throw new Error('The $span query failed');
if (!$h2) throw new Error('The $h2 query failed');

document.addEventListener('keydown', (event: any): void => {
  const eventKey: string = event.key;
  if (eventKey !== $span[i].textContent) counterError++;
  $h2.textContent = `Typing Errors: ${counterError}`;
  if (eventKey === $span[i].textContent && i < $span.length - 1) {
    $span[i].className = 'go';
    i++;
    $span[i].classList.toggle('current');
  } else if (eventKey === $span[i].textContent && i === $span.length - 1) {
    $span[i].className = 'go';
    setTimeout((): void => {
      alert(`Congratulations, keyboard warrior!
        Let's play again, shall we?`);
    }, 300);
    setTimeout((): void => {
      location.reload();
    }, 400);
  } else {
    $span[i].classList.add('stop');
  }
});
