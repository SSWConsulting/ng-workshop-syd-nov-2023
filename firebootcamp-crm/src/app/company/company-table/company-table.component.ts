import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyTableComponent {
  @Input()
  companies : Company[] = [];

  @Output()
  deleteClickedEvent : EventEmitter<Company> = new EventEmitter<Company>();

  deleteCompany(company: Company) {
    console.log("Delete works in child component", company)
    this.deleteClickedEvent.emit(company);
  }

  logChanges() {
    console.log("REPAINTING COMPONENT");
  }
}
