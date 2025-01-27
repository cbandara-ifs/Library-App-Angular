import { TestBed } from "@angular/core/testing";
import { BookService } from "./book.service";
import { MockApiHttpService } from "./mock-api-http.service";
import { of } from "rxjs";
import { IBook } from "../models/book.model";

describe("BookService", () => {
  let bookService: BookService;
  let mockApiHttp: MockApiHttpService;

  beforeEach(() => {
    mockApiHttp = new MockApiHttpService();

    bookService = new BookService(<any>mockApiHttp);
  });

  it("should be created", () => {
    expect(bookService).toBeTruthy();
  });

  it("should get all books", () => {
    const mockBook: IBook = {
      id: 2,
      title: "React: The Big Picture",
      slug: "react-big-picture",
      authorId: 3,
      category: "JavaScript",
    };

    mockApiHttp.getCallFake((url: string) => {
      return of([mockBook]);
    });

    bookService.getBooks().subscribe((book) => {
      expect(book).toEqual([mockBook]);
    });

    expect(mockApiHttp.get).toHaveBeenCalledWith("api/books");
  });
});
