import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-re-login',
  templateUrl: './re-login.component.html',
  styleUrls: ['./re-login.component.scss'],
})
export class ReLoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  logForm = this.fb.group({
    userName: ['', [Validators.required, Validators.pattern('^[A-Za-z]*$')]],
    pass: ['', [Validators.required, Validators.pattern('.{6,20}')]],
    conPass: [''],
  });
  get userName() {
    return this.logForm.get('userName');
  }
  get pass() {
    return this.logForm.get('pass');
  }

  ngOnInit(): void {}
}
