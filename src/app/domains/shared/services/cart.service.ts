import { Injectable, computed, signal } from '@angular/core';
import type { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  totalPrice = computed( () => {
    const cart = this.cart();
    return cart.reduce( (acc, item) => acc + item.price, 0);
  })

  constructor() { }

  addToCart(product: Product){
    this.cart.update( prevState => [...prevState, product])

  }
}
