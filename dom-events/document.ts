document.addEventListener('DOMContentLoaded', function (event: Event) {
  console.log('document loaded');
  console.log('event.type:', event.type);
});

document.addEventListener('keydown', function (event: KeyboardEvent) {
  console.log('key pressed');
  console.log('  event.key:', event.key);
});

document.addEventListener('mousemove', function (event: MouseEvent) {
  console.log('mouse moved');
  console.log('  pageX:', event.pageX, 'pageY:', event.pageY);
});
