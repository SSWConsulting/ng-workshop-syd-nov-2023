import { Component, OnDestroy } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable, Subscription, catchError, filter, finalize, of, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss',
})
export class CompanyListComponent {

  companies$!: Observable<Company[]>;

  constructor(private companyService: CompanyService) {
    this.companies$ = this.companyService.getCompanies().pipe(
      tap(() => console.log('got companies - COMPONENT')),
      finalize(() => console.log('FINALIZE - RXJS Operators ftw'))
    );
  }

  deleteCompany(company: Company) {
    this.companyService.deleteCompany(company).subscribe(
      x => console.log('company deleted', x)
    );
  }
}
