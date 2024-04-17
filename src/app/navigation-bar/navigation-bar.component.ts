import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  constructor() {}

  searchByBookName(bookName: string) {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const filteredBooks = books.filter((book: any) =>
      book.title.toLowerCase().includes(bookName.toLowerCase())
    );
    console.log('Books by name:', filteredBooks);
  }

  searchByAuthorName(authorName: string) {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const filteredBooks = books.filter((book: any) =>
      book.author.toLowerCase().includes(authorName.toLowerCase())
    );
    console.log('Books by author:', filteredBooks);
  }
}
