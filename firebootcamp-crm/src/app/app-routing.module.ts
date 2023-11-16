import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { RocketComponent } from './company/rocket/rocket.component';

const routes: Routes = [
  { path: '', redirectTo: 'company/list', pathMatch: 'full' },
  { path: 'rocket', component: RocketComponent },
  { path: 'company/list', component: CompanyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
