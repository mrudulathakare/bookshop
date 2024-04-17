// cart.service.ts
import { Injectable } from '@angular/core';
import { Book } from '../book.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Book[] = [];
  quantity:number[]=[];
  cartService: any;


  constructor() { }

  addToCart(book: Book) {
    this.cartItems.push(book);
    this.quantity.push(1);
  }

  removeFromCart(book: Book) {
    const index = this.cartItems.indexOf(book);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems() {
    return this.cartItems;
  }
}
