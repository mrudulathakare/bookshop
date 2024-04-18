import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../book.service';
import { SellerService } from '../seller.service';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [DatePipe, FormsModule, NgIf],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers: [DatePipe]
})
export class EditComponent implements OnInit {

  data: any;
  itemId: any = "";

  form: any = {
    name: "",
    author: "",
    price: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
  }

  constructor (private route: ActivatedRoute, private bookService: BookService, private sellerService: SellerService) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');

    this.data = this.bookService.getBookById(parseInt(this.itemId));
    console.log(this.data);

    this.form = { ...this.form, name: this.data.name, author: this.data.author, price: this.data.price, image: this.data.image };

  }

  deleteBookById (itemId: number) {
    this.sellerService.deleteBook(parseInt(this.itemId));
  }

  submit() {
    if (!this.form.name || !this.form.author || !this.form.price) {
      alert("Please fill necessary fields");
      return;
    }
    this.sellerService.submitEdit(this.form, parseInt(this.itemId));
  }
}