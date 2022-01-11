import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { reducers } from './store/reducers';

@NgModule({
  imports: [StoreModule.forFeature('auth', reducers)],
  exports: [StoreModule],
})
export class AuthStoreModule {}
