import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IUserCredentials } from "src/app/models/user.model";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  credentials: IUserCredentials = { email: "", password: "" };
  signInError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    this.signInError = false;
    this.authService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(["/home"]),
      error: () => (this.signInError = true),
    });
  }
}
