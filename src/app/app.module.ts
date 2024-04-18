import { AuthService } from './auth/auth.service';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './feature/books/books.component';
import { BookComponent } from './feature/book/book.component';

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
import { SearchComponent } from './search/search.component';
import { TransformPipe } from "./shared/transform.pipe";

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        CartComponent,
        SellerComponent,
        BooksComponent,
    ],
    providers: [BookService, CartService, AuthService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AuthModule,
        ReactiveFormsModule,
        SearchComponent,
        HeaderComponent,
        FeatureModule,
        TransformPipe
    ]
})
export class AppModule {}
