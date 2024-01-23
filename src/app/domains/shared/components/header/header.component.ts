import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({ required: true}) cart: Product[] = []
  total = signal(0);

  toggleSideMenu (){
    this.hideSideMenu.set(!this.hideSideMenu());
  }

  ngOnChanges(){
    this.total.set(this.cart.reduce( (acc, item) => acc + item.price, 0));
  }
}
