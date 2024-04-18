import { BooksComponent } from '../feature/books/books.component';
import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerService } from './seller.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css',
})
export class SellerComponent {
  bookForm!: FormGroup;
  books: Array<Book> = [];
  private booksSubscription!: Subscription;

  form: any = {
    name: "",
    author: "",
    price: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
  }

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private sellerService: SellerService
  ) { }

  ngOnInit() {

    this.booksSubscription = this.bookService.books$.subscribe((books: any) => {
      this.books = books;
    });
  }

  initializeForm() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
    });
  }


  removeBook(bookId: number) {
    this.sellerService.deleteBook(bookId);
  }

  private generateUniqueId(): number {
    return new Date().getTime() + Math.floor(Math.random() * 1000);
  }

  submit() {
    if (!this.form.name || !this.form.author || !this.form.price || !this.form.image) {
      alert("Please fill necessary fields");
      return;
    }
    this.sellerService.submitEdit(this.form, this.generateUniqueId());
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }
}
