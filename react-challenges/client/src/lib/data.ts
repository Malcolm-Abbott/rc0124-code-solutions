export type Challenge = {
  name: string;
  caption: string;
  description: string;
};

export const challenges: Challenge[] = [
  {
    name: 'Hot Button',
    caption: 'Using React to build a "hot" button component.',
    description:
      'Use React and CSS to create a HotButton component that changes color based on how many times the user has clicked it.',
  },
  {
    name: 'Toggle Switch',
    caption: 'Using React to build a Toggle Switch component.',
    description:
      'Use React and custom CSS to create a ToggleSwitch component that toggles between "ON" and "OFF" when a user clicks it.',
  },
  {
    name: 'Stopwatch',
    caption: 'Using React to build a stopwatch component.',
    description:
      'Use React and CSS to create a Stopwatch component that can be started, paused, and reset.',
  },
  {
    name: 'Validated Input',
    caption: 'Using React to build a form input with validation.',
    description:
      'Use React and CSS to create a ValidatedInput component that displays its validation status as the user types (not when the form is submitted).',
  },
];

export function nameToUrl(name: string): string {
  const words = name.split(' ');
  if (words.length < 2) return name.toLowerCase();

  let url = '';

  words.forEach((word, index) => {
    index < words.length - 1
      ? (url += word.toLowerCase() + '-')
      : (url += word.toLowerCase());
  });

  return url;
}
