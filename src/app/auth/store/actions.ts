import { RegisterInterface } from './../shared/models/register.interface';
import { ActionTypes } from './actions-types.enum';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterInterface>()
);
