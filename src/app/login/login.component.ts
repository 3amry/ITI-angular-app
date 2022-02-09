import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  logModel = {
    user: '',
    pass: '',
  };
  userName: string = '';
  onSubmit() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '[]');
    if (
      storedUser.user == this.logModel.user &&
      storedUser.pass == this.logModel.pass
    ) {
      this.userName = this.logModel.user;
    }
  }
}
