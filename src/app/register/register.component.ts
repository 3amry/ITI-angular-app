import { RegisterService } from './../Services/register.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private register: RegisterService) {}
  userModel: User = new User('', '', '', '', '', false);
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.userModel);
    this.register.register(this.userModel).subscribe(
      (res) => {
        console.log('success', res);
        localStorage.setItem('user', JSON.stringify(this.userModel));
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
}
