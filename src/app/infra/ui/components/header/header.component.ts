import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CartState } from 'src/app/infra/global-state/cart/cart-state.service';
import { Colors } from '../cart-icon/cart-icon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartIconColor = Colors.WHITE;

  itemsCount!: Observable<number>;

  constructor(private cartState: CartState) {
    this.itemsCount = this.cartState.$cartItems.pipe(map((d) => d.length));
  }

  ngOnInit(): void {
    console.log('ng on init');
  }
}
