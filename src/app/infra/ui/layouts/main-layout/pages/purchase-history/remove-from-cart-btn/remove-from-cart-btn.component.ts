import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { EmptyCartBtnService } from 'src/app/infra/global-state/empty-cart-btn/empty-cart-btn.service';

@Component({
  selector: 'app-remove-from-cart-btn',
  templateUrl: './remove-from-cart-btn.component.html',
  styleUrls: ['./remove-from-cart-btn.component.scss'],
})
export class RemoveFromCartBtnComponent implements OnInit {
  @Output() removeItem = new EventEmitter<void>();

  text = 'remover do carrinho';

  isItemInTheCart!: boolean;

  constructor(
    private cd: ChangeDetectorRef,
    private emptyCartBtnService: EmptyCartBtnService
  ) {}

  ngOnInit() {
    this.emptyCartBtnService.$emptyCartBtn.subscribe((data) => {
      this.isItemInTheCart = data;
      this.cd.detectChanges();
    });

    this.isItemInTheCart = true;
  }

  removeItemFromCart() {
    this.removeItem.emit();
    this.text = 'removido do carrinho';
    this.isItemInTheCart = false;
    this.cd.detectChanges();
  }
}
