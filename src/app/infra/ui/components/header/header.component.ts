import { Component } from '@angular/core';
import { Colors } from '../cart-icon/cart-icon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartIconColor = Colors.WHITE;
}
