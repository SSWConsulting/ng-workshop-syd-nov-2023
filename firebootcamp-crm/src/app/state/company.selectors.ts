import { createSelector } from '@ngrx/store';
import { AppState } from '../models/appState';

export const companyFeatureSelector = (appState: AppState) =>
  appState.companies;

export const selectCompanies = createSelector(
  companyFeatureSelector,
  (state) => state
);

export const selectCompaniesCount = createSelector(
  companyFeatureSelector,
  (state) => state.length
);
