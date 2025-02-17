import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { CartComponent } from "./components/cart/cart.component";
import { LoginComponent } from "./components/auth-menu/login/login.component";
import { AuthGuard } from "./authentication/auth.gurad";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "collection",
    component: CollectionComponent,
    canActivate: [AuthGuard],
  },
  { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  {
    path: "logout",
    loadChildren: () =>
      import("./pages/logout/logout.module").then((m) => m.LogoutModule),
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
