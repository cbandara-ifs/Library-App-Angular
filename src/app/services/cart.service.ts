import { Injectable } from '@angular/core';
import { IBook } from '../models/book.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);

  constructor(private apiHttp: ApiHttpService) {
    this.apiHttp.get('/api/cart').subscribe({
      next: (cart) => this.cart.next(cart),
    });
  }

  getCart(): Observable<IBook[]> {
    return this.cart.asObservable();
  }

  add(book: IBook) {
    const newCart = [...this.cart.getValue(), book];
    this.cart.next(newCart);
    this.apiHttp.post('/api/cart', newCart).subscribe(() => {
      console.log('added ' + book.title + ' to cart');
    });
  }

  remove(book: IBook) {
    const newCart = this.cart.getValue().filter((p) => p !== book);
    this.cart.next(newCart);
    this.apiHttp.post('/api/cart', newCart).subscribe(() => {
      console.log('removed ' + book.title + ' from cart');
    });
  }
}
