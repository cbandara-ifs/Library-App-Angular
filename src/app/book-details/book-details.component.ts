import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from './book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  @Input() book!: IBook;
  @Output() lend = new EventEmitter();

  lendButtonClicked(book: IBook) {
    this.lend.emit();
  }
}
