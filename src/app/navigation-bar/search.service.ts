import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../book.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResultsSubject = new BehaviorSubject<Book[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor() {}

  searchByBookName(books: Book[], bookName: string): void {
    const filteredBooks = books.filter((book) =>
      book.name.toLowerCase().includes(bookName.toLowerCase())
    );
    this.searchResultsSubject.next(filteredBooks);
  }

  searchByAuthorName(books: Book[], authorName: string): void {
    const filteredBooks = books.filter((book) =>
      book.author.toLowerCase().includes(authorName.toLowerCase())
    );
    this.searchResultsSubject.next(filteredBooks);
  }
}
