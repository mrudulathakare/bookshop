import { BooksComponent } from './../books/books.component';
import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css',
})
export class SellerComponent {
  bookForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.loadBooks();
  }
  books: Book[] = this.bookService.getBooks();

  initializeForm() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  loadBooks() {
    this.books = this.bookService.getBooks();
  }

  addBook() {
    if (this.bookForm.valid) {
      const newBook: Book = {
        id: this.generateUniqueId(),
        name: this.bookForm.value.name,
        author: this.bookForm.value.author,
        image: this.bookForm.value.image,
        price: this.bookForm.value.price,
      };
      this.bookService.addBook(newBook);
      this.loadBooks();
      this.bookForm.reset();
    }
  }

  removeBook(bookId: number) {
    this.bookService.removeBook(bookId);
    this.loadBooks();
  }

  editBook(updatedBook: Book) {
    this.bookService.editBook(updatedBook);
    this.loadBooks();
  }
  private generateUniqueId(): number {
    return new Date().getTime() + Math.floor(Math.random() * 1000);
  }
}
