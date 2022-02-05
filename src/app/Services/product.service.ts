import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    { id: 1, name: 'T-shirt', quantity: 10, price: 500_000, img: 'img1' },
    { id: 2, name: 'Pants', quantity: 10, price: 800_000, img: 'img1' },
    { id: 3, name: 'Whatch', quantity: 10, price: 1_000_000, img: 'img1' },
  ];
  constructor() {}
  getAllProducts() {
    return this.products;
  }
  getProductById(id: number) {
    if (isNaN(id)) null;
    const product = this.products.find((p) => (p.id = id));
    if (!product) null;
    return product;
  }
}
