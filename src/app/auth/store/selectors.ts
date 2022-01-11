import { AuthStateInterface } from './../shared/models/auth-state.interface';
import { AppStateInterface } from './../../shared/models/app-state.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth');

export const isSubmittingSelector: any = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
