import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoutComponent } from "./logout.component";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [{ path: "", component: LogoutComponent }];
@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [LogoutComponent, RouterModule],
})
export class LogoutModule {}
