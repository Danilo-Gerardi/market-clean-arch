import { Component } from '@angular/core';
import { CartStateInterface } from '@domain/cart/cart-state.interface';
import { ProductModel } from '@domain/product/product.model';
import { Observable, map } from 'rxjs';
import { Colors } from '../cart-icon/cart-icon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartIconColor = Colors.WHITE;

  itemsCount!: Observable<number>;

  disableCartBtn = true;

  constructor(private cartState: CartStateInterface) {
    this.itemsCount = this.cartState
      .getCartItems()
      .pipe(map((d: ProductModel[]) => d.length));

    this.itemsCount.subscribe((c) =>
      c === 0 ? (this.disableCartBtn = true) : (this.disableCartBtn = false)
    );
  }
}
