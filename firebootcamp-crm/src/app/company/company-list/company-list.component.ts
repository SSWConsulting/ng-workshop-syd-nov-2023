import { Component, OnDestroy, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  filter,
  finalize,
  of,
  tap,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppState } from '../../models/appState';
import { Store } from '@ngrx/store';
import { selectCompanies } from '../../state/company.selectors';
import { deleteCompany, loadCompanies } from '../../state/company.actions';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent implements OnInit {
  companies$ = this.store.select(selectCompanies);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCompanies());
  }

  deleteCompany(company: Company) {
    this.store.dispatch(deleteCompany(company));
  }
}
