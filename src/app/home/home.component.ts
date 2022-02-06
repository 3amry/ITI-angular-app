import { ProductsComponent } from './../products/products.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild(ProductsComponent) ProductsComponent!: ProductsComponent;
  displayData() {
    this.ProductsComponent.renderValues();
  }
}
