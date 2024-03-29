import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-remove-from-cart-btn',
  templateUrl: './remove-from-cart-btn.component.html',
  styleUrls: ['./remove-from-cart-btn.component.scss'],
})
export class RemoveFromCartBtnComponent {
  @Output() removeItem = new EventEmitter<void>();

  isItemInTheCart = true;

  text = 'tirar do carrinho';

  constructor(private cd: ChangeDetectorRef) {}

  removeItemFromCart() {
    this.removeItem.emit();
    this.text = 'removido do carrinho';
    this.isItemInTheCart = false;
    this.cd.detectChanges();
  }
}
