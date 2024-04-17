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

  // Initial books data
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
    // Add more books here...
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
