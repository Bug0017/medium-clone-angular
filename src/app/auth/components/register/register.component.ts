import { isSubmittingSelector } from './../../store/selectors';
import { registerAction } from './../../store/actions';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mca-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  initializeForm() {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  initializeValue() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValue();
  }

  onSubmit({ valid, value }: FormGroup) {
    if (valid) {
      console.log(value);
      this.store.dispatch(registerAction(value));
    }
  }
}
