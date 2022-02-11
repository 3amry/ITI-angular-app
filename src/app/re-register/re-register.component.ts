import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmPass } from '../confirmPass.validator';

@Component({
  selector: 'app-re-register',
  templateUrl: './re-register.component.html',
  styleUrls: ['./re-register.component.scss'],
})
export class ReRegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  // regForm = new FormGroup({
  //     userName: new FormControl(''),
  //     email: new FormControl(''),
  //     pass: new FormControl(''),
  //     conPass: new FormControl(''),
  //   });

  regForm = this.fb.group(
    {
      userName: ['', [Validators.required, Validators.pattern('^[A-Za-z]*$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$'),
        ],
      ],
      pass: ['', [Validators.required, Validators.pattern('.{6,20}')]],
      conPass: ['', Validators.required],
    },
    { validator: ConfirmPass }
  );

  get userName() {
    return this.regForm.get('userName');
  }
  get email() {
    return this.regForm.get('email');
  }
  get pass() {
    return this.regForm.get('pass');
  }

  ngOnInit(): void {}
}
