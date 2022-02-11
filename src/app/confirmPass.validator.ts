import { AbstractControl } from '@angular/forms';

export function ConfirmPass(control: AbstractControl) {
  const pass = control.get('pass');
  const conPass = control.get('conPass');
  if (pass?.pristine || conPass?.pristine) {
    return null;
  }
  return pass && conPass && pass.value !== conPass.value
    ? { misMatch: true }
    : null;
}
