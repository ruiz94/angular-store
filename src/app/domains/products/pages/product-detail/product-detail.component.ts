import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  cartService = inject(CartService);
  private productService = inject(ProductService);
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');


  ngOnInit(){
    if(!this.id) return;
    this.productService.getProductDetail(this.id)
    .subscribe({
      next: (product) => {
        console.log(product)
        this.product.set(product);
        if(product.images.length > 0){
          this.cover.set(product.images[0]);
        }
      }
    })
  }

  changeCover(img: string){
    this.cover.set(img)
  }

  addToCart(){
    const product = this.product();
    if(!product) return
    this.cartService.addToCart(product);
  }
}
