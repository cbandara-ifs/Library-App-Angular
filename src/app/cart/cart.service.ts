import { Injectable } from '@angular/core';
import { IBook } from '../book-details/book.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);
  constructor(private http: HttpClient) {
    this.http.get<IBook[]>('/api/cart').subscribe({
      next: (cart) => this.cart.next(cart),
    });
  }

  getCart(): Observable<IBook[]> {
    return this.cart.asObservable();
  }

  add(book: IBook) {
    const newCart = [...this.cart.getValue(), book];
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('added ' + book.title + ' to cart');
    });
  }

  remove(book: IBook) {
    const newCart = this.cart.getValue().filter((p) => p !== book);
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('removed ' + book.title + ' from cart');
    });
  }
}
