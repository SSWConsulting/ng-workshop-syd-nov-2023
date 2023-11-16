import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = "https://app-fbc-crm-api-prod.azurewebsites.net/api";

  constructor(private httpClient: HttpClient) { 
  }

  getCompanies(): Observable<Company[]> { 
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`).pipe(
      tap(() => console.log('got companies'))
    );
  }
}
