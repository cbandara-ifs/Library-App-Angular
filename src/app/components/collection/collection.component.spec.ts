import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CollectionComponent } from "./collection.component";
import { BookService } from "src/app/services/book.service";
import { CartService } from "src/app/services/cart.service";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";
import { IBook } from "src/app/models/book.model";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("CollectionComponent", () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;
  let mockBookService: jasmine.SpyObj<BookService>;
  let mockCartService: jasmine.SpyObj<CartService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: Partial<ActivatedRoute>;

  beforeEach(() => {
    mockBookService = jasmine.createSpyObj<BookService>("BookService", [
      "getBooks",
    ]);
    mockCartService = jasmine.createSpyObj<CartService>("CartService", ["add"]);
    mockRouter = jasmine.createSpyObj<Router>("Router", ["navigate"]);
    mockActivatedRoute = {
      queryParams: of({ filter: "angular" }),
    };

    const mockBooks: IBook[] = [
      {
        id: 2,
        title: "React: The Big Picture",
        slug: "react-big-picture",
        authorId: 3,
        category: "JavaScript",
      },
    ];

    mockBookService.getBooks.and.returnValue(of(mockBooks));

    TestBed.configureTestingModule({
      declarations: [CollectionComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: BookService, useValue: mockBookService },
        { provide: CartService, useValue: mockCartService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
