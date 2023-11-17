import { createAction } from '@ngrx/store';
import { Company } from '../company/company';

export const loadCompanies = createAction('[Companies] Load companies');

export const loadCompaniesSuccess = createAction(
  '[Companies] Load companies success',
  (companies: Company[]) => ({ payload: companies })
);

export const deleteCompany = createAction(
  '[Companies] Delete companies',
  (company: Company) => ({ payload: company })
);
