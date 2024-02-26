const $countdown = document.querySelector('.countdown-display');

if (!$countdown) throw new Error('The $countdown query failed');

const countdown = (): void => {
  if (!$countdown.textContent)
    throw new Error('The $countdown.textContent property is null');

  if (+$countdown.textContent > 1) {
    $countdown.textContent = `${+$countdown.textContent - 1}`;
  } else {
    $countdown.textContent = `~Earth Beeeelooowww Us~`;
    clearInterval(intervalID);
  }
};

const intervalID = setInterval(countdown, 1000);
