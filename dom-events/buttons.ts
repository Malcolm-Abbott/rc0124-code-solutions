const $click = document.querySelector('.click-button');

if (!$click) throw new Error('The $click query failed');

function handleClick(event: Event): any {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
  console.log('event.type:', event.type);
}

$click.addEventListener('click', handleClick);

const $hover = document.querySelector('.hover-button');

if (!$hover) throw new Error('The $hover query failed');

function handleMouseover(event: Event): any {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
  console.log('event.type:', event.type);
}

$hover.addEventListener('mouseover', handleMouseover);

const $doubleClick = document.querySelector('.double-click-button');

if (!$doubleClick) throw new Error('The $doubleClick query failed');

$doubleClick.addEventListener('dblclick', (event: Event) => {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
  console.log('event.type:', event.type);
});
