import { CartService } from './../cart/cart.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
@Input() book : any={};
constructor(public cartService: CartService) { }

addToCart(book: any) {
  this.cartService.addToCart(book);
  // Optionally, you can provide feedback to the user
  alert('Item added to cart!');
}
getQuantity(item: any): number {
  // Calculate the quantity of a specific item in the cart
  return this.cartService.getCartItems().filter((cartItem: { id: any; }) => cartItem.id === item.id).length;
}

}
