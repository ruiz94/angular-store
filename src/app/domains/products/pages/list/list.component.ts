import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { ProductComponent } from '@products/components/product/product.component';
import type { Product } from '@shared/models/product.model';
import type { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  cart = this.cartService.cart
  products = signal<Product[]>([]);
  categories = signal<Category[]>([])


  ngOnInit(){
    this.getProducts()
    this.getCategories()
  }

  private getProducts() {
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  private getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next: ( categories => {
        console.log(categories);
        this.categories.set(categories);
      })
    })
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}
