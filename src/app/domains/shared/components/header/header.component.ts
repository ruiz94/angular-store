import { Component, Input, inject, signal } from '@angular/core';

import { CartService } from '@shared/services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  totalPrice = this.cartService.totalPrice;

  toggleSideMenu (){
    this.hideSideMenu.set(!this.hideSideMenu());
  }
}
