import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CompleteNotification, Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  API_BASE = 'https://app-fbc-crm-api-prod.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`).pipe(
      tap(() => console.log('got companies - SERVICE')),
      catchError(this.handleError)
    );
  }

  deleteCompany(company: Company): Observable<Company> {
    console.log('Service - DeleteCompany called', company);
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${company.id}`).pipe(
    )
  }

  private handleError(err: any) {
    console.error('ah an error', err);
    return new Observable<Company[]>();
  }
}
