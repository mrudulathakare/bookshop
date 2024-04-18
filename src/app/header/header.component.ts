import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book, BookService } from '../book.service'; // Import your BookService
import { NgFor, NgIf } from '@angular/common';
import { SearchService } from '../search/search.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink]
})
export class HeaderComponent implements OnDestroy {
  isLoggedIn: boolean = false;
  showSearch: boolean = false;
  searchQuery: string = '';
  searchResults: Book[] = [];
  searchSubscription: Subscription | undefined;
  searchPerformed: boolean = false;

  constructor(private bookService: BookService, private searchService: SearchService) {} // Inject the BookService

  toggleSearch(): void {
    this.searchService.toggleSearch();
  }

  searchBooks() {
    this.searchPerformed = true;
    this.searchResults = this.bookService.searchBooks(this.searchQuery);
  }

  logout() {
    // Implement your logout functionality here
    alert('Logging out...');
  }

  ngOnDestroy(): void {
    // Unsubscribe from the search subscription when the component is destroyed
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
