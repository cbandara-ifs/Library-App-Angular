import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./components/layout/app.component";
import { SiteHeaderComponent } from "./components/site-header/site-header.component";
import { HomeComponent } from "./components/home/home.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { CartComponent } from "./components/cart/cart.component";
import { BookSearchComponent } from "./components/book-search/book-search.component";
import { AuthMenuComponent } from "./components/auth-menu/auth-menu.component";
import { PageHeaderComponent } from "./components/page-header/page-header.component";

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    HomeComponent,
    CollectionComponent,
    BookDetailsComponent,
    CartComponent,
    BookSearchComponent,
    AuthMenuComponent,
    PageHeaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
