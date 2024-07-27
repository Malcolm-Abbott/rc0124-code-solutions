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
  {
    name: 'Multiple Components',
    caption: 'Working with multiple interacting React components.',
    description:
      'The component is passed a list of items. Only one is displayed at a time. At the top is the name of the current item. Clicking the Next and Prev buttons cycles through the items. The middle row of numbered buttons indicates which item is currently displayed. Clicking one of the buttons cycles to the item with the index listed in that button.',
  },
  {
    name: 'Search',
    caption: 'Using React to build a search bar component.',
    description:
      'Use React and CSS to create a SearchableList component that displays a list of strings and filters them as the user types into a text field.',
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
