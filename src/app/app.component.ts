import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ITI-app';
  @ViewChild(ProductsComponent) ProductsComponent!: ProductsComponent;
  displayData() {
    this.ProductsComponent.renderValues();
  }
}
