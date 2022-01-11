import { AuthStoreModule } from './auth-store.module';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    AuthStoreModule,
  ],
  declarations: [RegisterComponent],
})
export class AuthModule {}
