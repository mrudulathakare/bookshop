import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../cart/cart.service';
import { BookService, Book } from '../../book.service';
import { SearchService } from '../../search/search.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  books: Book[] = [];
  filteredData: any = [];
  wishlist: any[] = [];
  showSearch = false;
  private booksSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private booksService: BookService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.booksSubscription = this.booksService.books$.subscribe((books: Book[]) => {
      this.books = books;
      this.filteredData = books;
    });
    
    this.searchService.showSearch$.subscribe(showSearch => {
      this.showSearch = showSearch;
    });

    this.searchService.searchQuery$.subscribe(query => {
      this.filterResults(query.author, query.title);

    });
  }

  ngOnDestroy() {
    if (this.booksSubscription) {
      this.booksSubscription.unsubscribe();
    }
    this.booksService.setLocalBooks(this.books);
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

  filterResults(author: string, book: string) {
    console.log(author);
    if (!author && !book) {
      this.filteredData = this.booksService.getBooks();
      return;
    }

    if (author) {
      this.filteredData = this.booksService.getBooks().filter((item: Book) => {
        return item?.author.toLowerCase().includes(author.toLowerCase());
      });
    } else if (book) {
      this.filteredData = this.booksService.getBooks().filter((item: Book) => {
        return item?.name.toLowerCase().includes(book.toLowerCase());
      }
      );
    }
  }
}
