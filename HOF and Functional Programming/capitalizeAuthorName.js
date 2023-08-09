const books = [
    {"title" : "Race-3", "author" : "Sallu Khan", "publicationYear" : 2021},
    {"title" : "Don-3", "author" : "shahbhukh Khan", "publicationYear" : 2008},
    {"title" : "Dhoom-3", "author" : "garib Khan", "publicationYear" : 2010},
    {"title" : "Golmaal-3", "author" : "vijay devgan", "publicationYear" : 2004},
];
    
const filterBooks = books.filter((book) => book.publicationYear >= 2010) ;

const capitalizedBooks = filterBooks.map((book) => {
    book.author = book.author.toUpperCase();
    return book;
});

console.log(capitalizedBooks);