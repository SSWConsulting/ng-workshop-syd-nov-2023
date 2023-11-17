import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  BehaviorSubject,
  CompleteNotification,
  Observable,
  catchError,
  of,
  tap,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  API_BASE = 'https://app-fbc-crm-api-prod.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`).pipe(
      tap(() => console.log('got companies - SERVICE')),
      catchError(this.handleError<Company[]>)
    );
  }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient
      .get<Company>(`${this.API_BASE}/company/${companyId}`)
      .pipe(catchError(this.handleError<Company>));
  }

  addCompany(company: Company): Observable<Company> {
    return this.httpClient
      .post<Company>(`${this.API_BASE}/company`, company)
      .pipe(catchError(this.handleError<Company>));
  }

  updateCompany(company: Company): Observable<Company> {
    return this.httpClient
      .put<Company>(`${this.API_BASE}/company/${company.id}`, company)
      .pipe(catchError(this.handleError<Company>));
  }

  deleteCompany(company: Company): Observable<Company> {
    return this.httpClient
      .delete<Company>(`${this.API_BASE}/company/${company.id}`)
      .pipe(catchError(this.handleError<Company>));
  }

  private handleError<T>(err: any) {
    console.error('ah an error', err);
    return new Observable<T>();
  }
}
