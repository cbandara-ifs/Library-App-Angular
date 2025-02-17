import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-auth-menu",
  templateUrl: "./auth-menu.component.html",
  styleUrls: ["./auth-menu.component.scss"],
})
export class AuthMenuComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;

  isAuthenticatedSubscription: Subscription | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated ?? false;

    this.authSubscribe();
  }

  ngOnDestroy(): void {
    this.authUnsubscribe();
  }

  private authSubscribe() {
    this.isAuthenticatedSubscription =
      this.authService.isAuthenticated$.subscribe(
        (res) => (this.isAuthenticated = res)
      );
  }

  private authUnsubscribe() {
    if (this.isAuthenticatedSubscription) {
      this.isAuthenticatedSubscription.unsubscribe();
    }
  }
}
