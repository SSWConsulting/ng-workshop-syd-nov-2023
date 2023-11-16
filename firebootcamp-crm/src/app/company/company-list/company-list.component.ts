import { Component } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {

companies: Company[] = [ // TODO: Strongly type the array
    {
      name: 'Company A', 
      email: 'email@companyA.com',
      phone: 12345
    },
    {
      name: 'Company B', 
      email: 'email@companyB.com',
      phone: 12345
    },
    {
      name: 'Company C', 
      email: 'email@companyA.com',
      phone: 12345
    },
  ] 
}
