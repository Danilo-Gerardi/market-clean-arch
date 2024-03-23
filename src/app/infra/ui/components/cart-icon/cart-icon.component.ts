import { Component, Input } from '@angular/core';

export enum Colors {
  PURPLE = '#3d0179',
  WHITE = '#ffffff',
  DISABLED = 'gray',
}

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
})
export class CartIconComponent {
  @Input() color = Colors.PURPLE;
}
