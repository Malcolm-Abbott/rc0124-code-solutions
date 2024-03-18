function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 2000);
  });
}

async function performWait(): Promise<void> {
  try {
    const wait = await waitTwoSeconds();
    console.log('wait:', wait);
  } catch (error) {
    console.log('error:', error);
  }
}

performWait();
