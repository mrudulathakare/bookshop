import { Injectable } from '@angular/core';
import { Book, BookService } from '../book.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private bookService: BookService) { }

  deleteBook(itemId: number) {
    // Retrieve the list of books from local storage
    let books = JSON.parse(localStorage.getItem('books') || '[]') as Array<Book>;

    // Filter out the book with the specified itemId
    books = books.filter((book) => book.id !== itemId);

    // Update the data in local storage
    localStorage.setItem('books', JSON.stringify(books));
    console.log("Deleted item successfully");

    // Notify the BookService of the update
    this.bookService.updateBooks(books);
  }

  submitEdit(form: any, itemId: number) {
    // Update the data in localStorage
    let books = JSON.parse(localStorage.getItem('books') || '[]') as Array<Book>;
    const index = books.findIndex((book) => book.id === itemId);
  
    if (index !== -1) {
      // Book exists, update it
      books[index] = { ...books[index], ...form };
      alert("Item updated successfully");

    } else {
      // Book does not exist, add it
      
      books.push({ ...form, isbn: itemId });
      alert("Book added to store");
    }
  
    localStorage.setItem('books', JSON.stringify(books));
  
    // Notify the BookService of the update
    this.bookService.updateBooks(books);
  }
  
}
