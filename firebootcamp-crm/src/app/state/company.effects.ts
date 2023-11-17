import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '../company/company.service';
import {
  deleteCompany,
  loadCompanies,
  loadCompaniesSuccess,
} from './company.actions';
import { exhaustMap, map } from 'rxjs';
import { Company } from '../company/company';

@Injectable()
export class CompanyEffects {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}

  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCompanies.type),
      exhaustMap(() =>
        this.companyService
          .getCompanies()
          .pipe(map((companies) => loadCompaniesSuccess(companies)))
      )
    )
  );

  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCompany.type),
      exhaustMap((action) =>
        this.companyService
          .deleteCompany((action as any).payload as Company)
          .pipe(map(() => loadCompanies()))
      )
    )
  );
}
