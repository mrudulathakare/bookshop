import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book, BookService } from '../book.service'; // Import your BookService
import { NgFor, NgIf } from '@angular/common';
import { SearchService } from '../search/search.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink]
})
export class HeaderComponent implements OnDestroy, OnInit {
  isLoggedIn: boolean = false;
  showSearch: boolean = false;
  searchQuery: string = '';
  searchResults: Book[] = [];
  searchSubscription: Subscription | undefined;
  searchPerformed: boolean = false;

  constructor(private bookService: BookService, private searchService: SearchService, private authService: AuthService) {} // Inject the BookService

  ngOnInit(): void {
      (async () => {
        await this.authService.initAuthStateListener();
      })
  }

  toggleSearch(): void {
    this.searchService.toggleSearch();
  }

  isAuthenticated(): boolean {
    const isAuth = this.authService.isAuthenticated;

    return isAuth;
  }

  searchBooks() {
    this.searchPerformed = true;
    this.searchResults = this.bookService.searchBooks(this.searchQuery);
  }

  logout(): any {
    this.authService.logout();
  }


  ngOnDestroy(): void {
    // Unsubscribe from the search subscription when the component is destroyed
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
