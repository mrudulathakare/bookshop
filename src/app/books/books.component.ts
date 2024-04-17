import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { BookService } from '../book.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
  filteredBooks: Book[] = [];
  searchQuery: any;
  bookNameQuery: any;
  filteredBooksByBookName!: Book[];
  authorNameQuery: any;

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

  ngOnDestroy() {
    this.booksService.setLocalBooks(this.books);
  }

  constructor(
    private cartService: CartService,
    private booksService: BookService
  ) {}

  books: Book[] = [];
  wishlist: any[] = [];

  addToCart(book: any) {
    this.cartService.addToCart(book);
  }

  // searchBooksByBookName() {
  //   if (this.books) {
  //     const query = this.bookNameQuery.toLowerCase();
  //     this.filteredBooksByBookName = this.books.filter(book =>
  //       book.name.toLowerCase().includes(query.substring(0, 3))
  //     );
  //   }
  // }

  // searchBooksByAuthorName() {
  //   if (this.books) {
  //     const query = this.authorNameQuery.toLowerCase();
  //     this.filteredBooksByBookName = this.books.filter(book =>
  //       book.author.toLowerCase().includes(query.substring(0, 3))
  //     );
  //   }
  // }
  searchBooks() {}
}

interface Book {
  id: number;
  name: string;
  author: string;
  image: string;
  price: number;
}
