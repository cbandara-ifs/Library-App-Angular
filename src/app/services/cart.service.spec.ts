import { CartService } from './cart.service';
import { IBook } from '../models/book.model';
import { MockApiHttpService } from './mock-api-http.service';
import { of } from 'rxjs';

describe('CartService', () => {
  let cartservice: CartService;
  let mockApiHttp: MockApiHttpService;

  beforeEach(() => {
    mockApiHttp = new MockApiHttpService();

    mockApiHttp.getCallFake((url: string) => {
      return of([
        {
          id: 1,
          title: 'Securing React Apps with Auth0',
          slug: 'react-auth0-authentication-security',
          authorId: 1,
          category: 'JavaScript',
        },
      ]);
    });

    cartservice = new CartService(<any>mockApiHttp);
  });

  it('should be created', () => {
    expect(cartservice).toBeTruthy();
  });

  it('should get the cart items', () => {
    const mockCartData = [
      {
        id: 1,
        title: 'Securing React Apps with Auth0',
        slug: 'react-auth0-authentication-security',
        authorId: 1,
        category: 'JavaScript',
      },
    ];

    cartservice.getCart().subscribe((cart) => {
      expect(cart).toEqual(mockCartData);
    });

    expect(mockApiHttp.get).toHaveBeenCalledWith('/api/cart');
  });

  it('should add items to cart', () => {
    const mockBook: IBook = {
      id: 2,
      title: 'React: The Big Picture',
      slug: 'react-big-picture',
      authorId: 3,
      category: 'JavaScript',
    };

    const initialCart: IBook[] = [];
    cartservice.cart.next(initialCart);

    mockApiHttp.postCallFake((url: string) => {
      return of(null);
    });

    cartservice.add(mockBook);

    cartservice.cart.subscribe((cart) => {
      expect(cart.length).toBe(1);
    });

    expect(mockApiHttp.post).toHaveBeenCalledWith('/api/cart', [mockBook]);
  });

  it('should remove item from the cart', () => {
    const mockBook1: IBook = {
      id: 2,
      title: 'React: The Big Picture',
      slug: 'react-big-picture',
      authorId: 3,
      category: 'JavaScript',
    };

    const mockBook2: IBook = {
      id: 2,
      title: 'React: The Big Picture',
      slug: 'react-big-picture',
      authorId: 3,
      category: 'JavaScript',
    };

    const initialCart: IBook[] = [mockBook1, mockBook2];

    cartservice.cart.next(initialCart);

    mockApiHttp.postCallFake((url: string) => {
      return of(null);
    });

    cartservice.remove(mockBook2);

    cartservice.cart.subscribe((cart) => {
      expect(cart.length).toBe(1);
    });

    expect(mockApiHttp.post).toHaveBeenCalledWith('/api/cart', [mockBook1]);
  });
});
