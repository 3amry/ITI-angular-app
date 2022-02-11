import { ProductService } from './../Services/product.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ForbiddenName } from '../userName.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  noteForm = this.fb.group({
    name: ['', [Validators.required, ForbiddenName(/(adminstrator|admin)\b/)]],
    discount: [''],
    hasDisocunt: [false],
    comments: this.fb.array([]),
  });
  ngOnInit(): void {}
  get hasDisocunt() {
    return this.noteForm.get('hasDisocunt');
  }
  get comments() {
    return this.noteForm.get('comments') as FormArray;
  }
  addComment() {
    this.comments.push(this.fb.control(''));
  }
  setDiscountValidation() {
    this.noteForm.get('hasDiscount')?.valueChanges.subscribe((chkedValue) => {
      if (chkedValue) {
        this.discount?.setValidators(Validators.required);
      } else {
        this.discount?.clearValidators();
      }
      this.discount?.updateValueAndValidity();
    });
  }
  get discount() {
    return this.noteForm.get('discount');
  }
  get name() {
    return this.noteForm.get('name');
  }
  get pass() {
    return this.noteForm.get('pass');
  }
}
