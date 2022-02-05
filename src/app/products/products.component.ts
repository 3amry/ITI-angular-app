import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../shared-classes-and-types/DiscountOffers ';
import { ICategory } from '../shared-classes-and-types/ICategory';
import { IProducts } from '../shared-classes-and-types/IProducts';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  discount!: DiscountOffers;
  storeName!: string;
  storeLogo!: string;
  productList!: IProducts[];
  categoryList!: ICategory[];
  clientName!: string;
  isPurchased!: boolean;

  constructor(private productService: ProductService) {
    this.discount = DiscountOffers.tenPercent;
    this.storeName = 'market';
    this.storeLogo = '../../assets/logo.png';
    // this.productList: any = []
    this.categoryList = [
      {
        id: 1,
        name: 'Clothes',
      },
      {
        id: 2,
        name: 'Phones',
      },
      {
        id: 3,
        name: 'TVs',
      },
    ];
    this.clientName = 'client';
    this.isPurchased = false;
  }
  buy() {
    this.isPurchased = !this.isPurchased;
  }
  renderValues(): any {
    this.productList = this.productService.getAllProducts();
  }
  ngOnInit(): void {}
}
