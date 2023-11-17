import { Component } from '@angular/core';
import { CompanyService } from './company/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sydney 🐨';
  currentDate = new Date();

  companies$ = this.companyService.getCompanies();

  constructor(
    private companyService: CompanyService,
  ) {}
}
