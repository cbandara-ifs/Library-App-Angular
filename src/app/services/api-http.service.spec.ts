import { ApiHttpService } from "./api-http.service";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

describe("ApiHttpService", () => {
  let service: ApiHttpService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj<HttpClient>("HttpClient", [
      "get",
      "post",
    ]);

    service = new ApiHttpService(mockHttpClient);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should create a get request", () => {
    const mockUrl = "api/cart";

    mockHttpClient.get.and.returnValue(of(null));

    service.get(mockUrl).subscribe(() => {});

    expect(mockHttpClient.get).toHaveBeenCalledWith(mockUrl);
  });

  it("should create a post request", () => {
    const mockUrl = "api/cart";

    mockHttpClient.post.and.returnValue(of(null));

    service.post(mockUrl, {}).subscribe(() => {});

    expect(mockHttpClient.post).toHaveBeenCalledWith(mockUrl, {});
  });
});
