import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, BsDropdownModule.forRoot()],
})
export class AuthMenuModule {}
