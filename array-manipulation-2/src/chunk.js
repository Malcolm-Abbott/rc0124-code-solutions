'use strict';
/* exported chunk */
function chunk(array, size) {
  const chunk = [];
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (i % size === 0) {
      let newChunk = [];
      newChunk.push(currentElement);
      chunk.push(newChunk);
    } else {
      let lastChunk = chunk.at(-1);
      lastChunk.push(currentElement);
    }
  }
  return chunk;
}
