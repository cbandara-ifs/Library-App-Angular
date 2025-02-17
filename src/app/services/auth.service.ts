import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { IUser, IUserCredentials } from "../models/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user: BehaviorSubject<IUser | null>;

  isAuthenticated$: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
    this.isAuthenticated$ = new BehaviorSubject(this.isAuthenticated);
  }

  getUser(): Observable<IUser | null> {
    return this.user.asObservable();
  }

  get isAuthenticated(): boolean {
    return this.user.getValue() !== null;
  }

  signIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http.post<IUser>("/api/sign-in", credentials).pipe(
      map((user: IUser) => {
        this.user.next(user);
        this.changeIsAuthenticated();
        return user;
      })
    );
  }

  signOut() {
    this.user.next(null);
    this.changeIsAuthenticated();
  }

  private changeIsAuthenticated(): void {
    this.isAuthenticated$.next(this.isAuthenticated);
  }
}
