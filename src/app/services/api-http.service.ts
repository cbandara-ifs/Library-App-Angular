import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  constructor(private httpClient: HttpClient) {}

  get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(url, body);
  }
}
