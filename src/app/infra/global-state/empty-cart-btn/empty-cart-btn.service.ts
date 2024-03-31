import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmptyCartBtnService {
  $emptyCartBtn = new BehaviorSubject<boolean>(true);
}
