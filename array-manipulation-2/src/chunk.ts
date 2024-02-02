/* exported chunk */
function chunk(array: any[], size: number): any[] {
  const chunk: any[] = [];
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    if (i % size === 0) {
      const newChunk = [];
      newChunk.push(currentElement);
      chunk.push(newChunk);
    } else {
      const lastChunk = chunk.at(-1);
      lastChunk.push(currentElement);
    }
  }
  return chunk;
}
