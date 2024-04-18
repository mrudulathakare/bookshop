import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Book } from '../book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // Define cart data
  cartItems: Book[] = [];
  totalPrice: any;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartData();
    this.totalPrice = this.cartService.totalPrice();
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item)
    this.cartItems = this.cartService.getCartData();
    this.totalPrice = this.cartService.totalPrice();
  }

  reduceItemQuantity(itemId: number): void {
    console.log(itemId);
    this.cartService.updateCartProdQuantity(itemId, "sub");
    this.cartItems = this.cartService.getCartData();
    this.totalPrice = this.cartService.totalPrice();
  }

  addItemQuantity(itemId: number): void {
    console.log(itemId);
    this.cartService.updateCartProdQuantity(itemId, "add");
    this.cartItems = this.cartService.getCartData();
    this.totalPrice = this.cartService.totalPrice();
  }
}
