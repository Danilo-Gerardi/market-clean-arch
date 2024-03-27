import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CartIconComponent } from '@components/cart-icon/cart-icon.component';
import { FormatToRealPipe } from 'src/app/infra/pipes/format-to-real.pipe';

@NgModule({
  declarations: [FormatToRealPipe, CartIconComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormatToRealPipe,
    CartIconComponent,
  ],
})
export class SharedModule {}
