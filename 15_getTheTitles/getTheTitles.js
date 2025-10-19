// given an array of objects that represent books with an author and a title that looks like this
const getTheTitles = function(bookObjectArray) {
    return bookObjectArray.map(book => book.title);
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

// Do not edit below this line
module.exports = getTheTitles;
