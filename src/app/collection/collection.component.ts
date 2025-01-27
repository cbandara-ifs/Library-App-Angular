import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';
import { BookService } from '../book-details/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  books!: IBook[];
  filter: string = '';

  constructor(
    private bookSrvc: BookService,
    private cartSrvc: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookSrvc.getBooks().subscribe((books) => {
      this.books = books;
    });
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    });
  }

  getFilteredBooks() {
    return this.filter === ''
      ? this.books
      : this.books.filter((book) => book.category === this.filter);
  }

  addBooksToCart(book: IBook) {
    this.cartSrvc.add(book);
    this.router.navigate(['/cart']);
  }
}
