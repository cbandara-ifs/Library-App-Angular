import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockApiHttpService {
  private mockApiHttp: any;

  constructor() {
    this.mockApiHttp = jasmine.createSpyObj('mockApiHttp', ['get', 'post']);
  }

  get get(): any {
    return this.mockApiHttp.get;
  }

  get post(): any {
    return this.mockApiHttp.post;
  }

  getCallFake(callFake: any): void {
    this.mockApiHttp.get.and.callFake(callFake);
  }

  postCallFake(callFake: any): void {
    this.mockApiHttp.post.and.callFake(callFake);
  }
}
