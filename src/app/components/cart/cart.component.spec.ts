import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CartComponent } from "./cart.component";
import { CartService } from "src/app/services/cart.service";
import { IBook } from "src/app/models/book.model";
import { of } from "rxjs";

describe("CartComponent", () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let mockCartService: jasmine.SpyObj<CartService>;

  beforeEach(() => {
    mockCartService = jasmine.createSpyObj<CartService>("CartService", [
      "getCart",
      "remove",
    ]);

    const mockBooks: IBook[] = [
      {
        id: 2,
        title: "React: The Big Picture",
        slug: "react-big-picture",
        authorId: 3,
        category: "JavaScript",
      },
    ];

    mockCartService.getCart.and.returnValue(of(mockBooks));

    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [{ provide: CartService, useValue: mockCartService }],
    });

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
