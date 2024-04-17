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


constructor(private cartService:CartService)
{
  this.cartItems = this.cartService.getCartItems();
}
quantity: number[] =this.cartService.quantity;


getIt()
{
  this.cartItems= this.cartService.getCartItems();
  console.log(this.cartItems);
}

removeFromCart(item: any) {
  this.cartService.removeFromCart(item); 
    this.cartItems = this.cartService.getCartItems();

}
}
