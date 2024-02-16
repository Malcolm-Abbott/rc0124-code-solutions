'use strict';
const books = [
  {
    isbn: '1',
    title: "The Razor's Edge",
    author: 'W. Somerset Maugham',
  },
  {
    isbn: '2',
    title: 'Post Office',
    author: 'Charles Bukowski',
  },
  {
    isbn: '3',
    title: 'On The Road',
    author: 'Jack Keroac',
  },
];
console.log('books:', books);
console.log('typeof books:', typeof books);
const booksJSON = JSON.stringify(books);
console.log('booksJSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);
const studentJSON = '{"id": "1", "name": "Malcolm Abbott"}';
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);
const student = JSON.parse(studentJSON);
console.log('student:', student);
console.log('typeof student:', typeof student);
