import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { SellerComponent } from './seller/seller.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FeatureComponent } from './feature/feature/feature.component';
import { SharedComponent } from './shared/shared/shared.component';
const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: '', component: BookComponent },
  { path: 'cart', component: CartComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
