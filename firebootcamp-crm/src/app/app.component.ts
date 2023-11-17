import { Component } from '@angular/core';
import { CompanyService } from './company/company.service';
import { map } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './models/appState';
import { selectCompaniesCount } from './state/company.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Sydney 🐨';
  currentDate = new Date();

  companyCount$ = this.store.select(selectCompaniesCount);

  constructor(private store: Store<AppState>) {}
}
