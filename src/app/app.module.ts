import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./components/layout/app.component";
import { HomeComponent } from "./components/home/home.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { CartComponent } from "./components/cart/cart.component";
import { PageHeaderComponent } from "./components/page-header/page-header.component";

import { SiteHeaderModule } from "./components/site-header/site-header.module";
import { AuthMenuModule } from "./components/auth-menu/auth-menu.module";
import { LogoutModule } from "./pages/logout/logout.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionComponent,
    BookDetailsComponent,
    CartComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    SiteHeaderModule,
    AuthMenuModule,
    LogoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
