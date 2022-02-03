import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../shared-classes-and-types/DiscountOffers ';
import { ICategory } from '../shared-classes-and-types/ICategory';
import { IProducts } from '../shared-classes-and-types/IProducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  productList: IProducts[];
  categoryList: ICategory[];
  clientName: string;
  isPurchased: boolean;

  constructor() {
    this.discount = DiscountOffers.tenPercent;
    this.storeName = 'market';
    this.storeLogo = '../../assets/logo.png';
    this.productList = [
      {
        id: 1,
        name: 'T-shirt',
        quantity: 10,
        price: 500_000,
        img: 'img1',
      },
      {
        id: 2,
        name: 'Pants',
        quantity: 10,
        price: 800_000,
        img: 'img1',
      },
      {
        id: 3,
        name: 'Whatch',
        quantity: 10,
        price: 1_000_000,
        img: 'img1',
      },
    ];
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
  ngOnInit(): void {}
}
