// cart.service.ts
import { Injectable } from '@angular/core';
import { Book } from '../book.service';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Book[] = [];
  cartService: any;

  constructor(private router: Router) { }

  getCartData(): Array<Book> {
    const data = sessionStorage.getItem("cartItems");

    if (data) {
      this.cartItems = JSON.parse(data);
    } else {
      this.cartItems = [];
    }

    return this.cartItems;
  }

  addToCart(selectedBook: Book) {
    const userAuth = getAuth();

    if (!userAuth.currentUser) {
      alert("No user logged in. Please log in first");
      this.router.navigate(['/login']);
      return;
    }

    let storedBooksString = sessionStorage.getItem('cartItems');
    let storedBooks: Array<Book> = storedBooksString ? JSON.parse(storedBooksString) : [];

    const existingBookIndex = storedBooks.findIndex(book => book.id === selectedBook.id);

    if (existingBookIndex === -1) {
      storedBooks.push({
        ...selectedBook,
        quantity: 1,
        totalPrice: selectedBook.price
      });
    } else {
      const currentBook = storedBooks[existingBookIndex];
      currentBook.totalPrice = currentBook.totalPrice / currentBook.quantity++ * currentBook.quantity;
    }

    alert("Book added to your cart!");
    this.router.navigate(['cart']);

    const updatedBooksString = JSON.stringify(storedBooks);
    sessionStorage.setItem('cartItems', updatedBooksString);
  }

  removeFromCart(itemId: number) {
    let storedBooksString = sessionStorage.getItem('cartItems');
    let storedBooks: Array<any> = storedBooksString ? JSON.parse(storedBooksString) : [];

    const res = storedBooks.filter((book: Book) => book.id !== itemId);

    let updatedItemsString = JSON.stringify(res);

    sessionStorage.setItem('cartItems', updatedItemsString);
  }

  updateCartProdQuantity(id: number, action: string): void {
    let storedItemsString = sessionStorage.getItem('cartItems');
    let storedItems: Array<any> = storedItemsString ? JSON.parse(storedItemsString) : [];
  
    const itemIndex = storedItems.findIndex(item => item.id === id);
  
    if (action === "sub" && storedItems[itemIndex].quantity > 1) {
      storedItems[itemIndex].totalPrice = storedItems[itemIndex].totalPrice / storedItems[itemIndex].quantity-- * storedItems[itemIndex].quantity;
    } else if (action === "add") {
      storedItems[itemIndex].totalPrice = storedItems[itemIndex].totalPrice / storedItems[itemIndex].quantity++ * storedItems[itemIndex].quantity;
    } else if (action === "sub" && storedItems[itemIndex].quantity === 1) {
      this.removeFromCart(id);
      return;
    }
  
    let updatedItemsString = JSON.stringify(storedItems);
    sessionStorage.setItem('cartItems', updatedItemsString);
  }

  totalPrice() {
    let total = 0;

    for (let i in this.cartItems) {
      total += this.cartItems[i].totalPrice;
    }

    return total;
  }  

}
