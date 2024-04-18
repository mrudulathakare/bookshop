import { AuthService } from './auth/auth.service';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { SellerComponent } from './seller/seller.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureModule } from './feature/feature.module';
import { BookService } from './book.service';
import { CartService } from './cart/cart.service';
import { FeatureComponent } from './feature/feature/feature.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    SellerComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    FeatureModule,
    SearchComponent,
    HeaderComponent,
    // RouterModule.forRoot(routes)
  ],

  providers: [BookService, CartService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
