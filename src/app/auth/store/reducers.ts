import { registerAction } from './actions';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../shared/models/auth-state.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state: any, action: Action) {
  return authReducer(state, action);
}
