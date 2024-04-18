import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  setLocalBooks(books: Book[]): void {
    localStorage.setItem('books', JSON.stringify(books));
  }

  getLocalBooks(): Book[] {
    const lb = localStorage.getItem('books');
    if (lb) return JSON.parse(lb);
    return [];
  }

  books: Book[] = [
    {
      id: 0,
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      image:
        'https://sun9-76.userapi.com/c236331/u491760190/d14/-3/x_91b05331e0.jpg',
      price: 700,
    },
    {
      id: 1,
      name: 'War and Peace',
      author: 'Tolstoy',
      image:
        'https://www.gutenberg.org/cache/epub/2600/pg2600.cover.medium.jpg',
      price: 990,
    },
    {
      id: 2,
      name: 'Anna Karenina',
      author: 'Leo Tolstoy',
      image:
        'https://www.aliceandbooks.com/covers/Anna_Karenina-Leo_Tolstoy-lg.png',
      price: 1199,
    },
    {
      id: 3,
      name: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      image:
        'https://mbassets.b-cdn.net/cdni/book-cover/1588488876_016725400.jpg?w=200&q=50',
      price: 600,
    },
    {
      id: 4,
      name: 'A Suitable Boy',
      author: 'Vikram Seth',
      image:
        'https://m.media-amazon.com/images/I/71MQpt0wCkL._AC_UF1000,1000_QL80_.jpg',
      price: 1390,
    },
    {
      id: 5,
      name: 'A Passage to India',
      author: 'E. M. Forster',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pHnOJv25JV0AS8coPT-TMFdHPKXMzjFvww3jjiT9Qw&s',
      price: 549,
    },
    {
      id: 6,
      name: 'Great Expectations',
      author: 'By Charles Dickens',
      image:
        'https://cdn.kobo.com/book-images/b300a5df-adb1-4d43-b48f-53e35f2804d4/353/569/90/False/great-expectations-30.jpg',
      price: 199,
    },
    {
      id: 7,
      name: 'The Hobbit',
      author: ' J.R.R. Tolkien',
      image:
        'https://i0.wp.com/literariness.org/wp-content/uploads/2021/02/91b0C2YNSrL.jpg?resize=700%2C1084&ssl=1',
      price: 199,
    },
    {
      id: 8,
      name: 'Alice in Wonderland',
      author: 'Lewis Carroll',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdX_ckMoakPy3ay4I161zBmdOPjHRwkXlsQlO2Rz64Q&s',
      price: 239,
    },
    {
      id: 9,
      name: 'Moneyball',
      author: 'Michael Lewis',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbVbNHgQxosojSlbUzFMiujgppu2V8_vYPW3Vagfarw&s',
      price: 399,
    },
    {
      id: 10,
      name: 'Invisible',
      author: 'Ralph Ellison',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/e/ee/Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg',
      price: 149,
    },
    {
      id: 11,
      name: 'Little Women',
      author: 'Louisa May Alcott',
      image:
        'https://cdn.kobo.com/book-images/1f1594af-4ed7-4c60-80f1-6f7aeb3c0efd/1200/1200/False/little-women-339.jpg',
      price: 249,
    },
    {
      id: 12,
      name: 'The Return of the King',
      author: 'J.R.R. Tolkien',
      image:
        'https://cdn.webshopapp.com/shops/297859/files/363609518/700x700x2/jrr-tolkien-the-return-of-the-king-book-3.jpg',
      price: 99,
    },
  ];

  // Function to search books by name or author
  searchBooks(searchQuery: string): Book[] {
    searchQuery = searchQuery.toLowerCase();
    return this.books.filter(
      (book) =>
        book.name.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery)
    );
  }

  getBooks(): Book[] {
    const localbooks = localStorage.getItem('books');
    if (localbooks) return JSON.parse(localbooks);
    return this.books;
  }

  addBook(newBook: Book): void {
    this.books.push(newBook);
  }

  removeBook(bookId: number): void {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  editBook(updatedBook: Book): void {
    const index = this.books.findIndex((book) => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }
}

export interface Book {
  id: number;
  name: string;
  author: string;
  image: string;
  price: number;
}
