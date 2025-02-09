import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";

import { SiteHeaderComponent } from "./site-header.component";
import { BookSearchComponent } from "../book-search/book-search.component";
import { AuthMenuComponent } from "../auth-menu/auth-menu.component";

@NgModule({
  declarations: [SiteHeaderComponent, BookSearchComponent, AuthMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [SiteHeaderComponent],
})
export class SiteHeaderModule {}
