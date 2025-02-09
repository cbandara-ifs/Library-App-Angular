import { Component, OnInit } from "@angular/core";
import { SiteHeaderViewModel } from "./site-header.view-model";
import * as moment from "moment";

@Component({
  selector: "app-site-header",
  templateUrl: "./site-header.component.html",
  styleUrls: ["./site-header.component.scss"],
})
export class SiteHeaderComponent implements OnInit {
  private readonly dateTimeFormat: string = "DD MMM YYYY - HH:mm";
  private readonly timeZoneName: string = "Australia/Sydney";

  viewModel: SiteHeaderViewModel;

  constructor() {
    this.viewModel = new SiteHeaderViewModel();
  }

  ngOnInit(): void {
    this.viewModel = this.getViewModel();
  }
  private getViewModel(): SiteHeaderViewModel {
    return {
      utcDateTime: moment().utc().format(this.dateTimeFormat),
      sydneyDateTime: moment().utc().format(this.dateTimeFormat),

      isMobileMenuCollapsable: true,
    };
  }

  toggleMobileMenu() {
    this.viewModel.isMobileMenuCollapsable =
      !this.viewModel.isMobileMenuCollapsable;
  }

  collapseMobileMenu() {
    this.viewModel.isMobileMenuCollapsable = true;
  }
}
