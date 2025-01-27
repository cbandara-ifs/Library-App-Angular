import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IBook } from '../models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: IBook[] = [];

  constructor(private cartSrvc: CartService) {}

  ngOnInit(): void {
    this.cartSrvc.getCart().subscribe({
      next: (cart) => (this.cart = cart),
    });
  }

  get cartItems() {
    return this.cart;
  }

  removeFromCart(book: IBook) {
    this.cartSrvc.remove(book);
  }
}
