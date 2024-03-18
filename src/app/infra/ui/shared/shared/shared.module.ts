import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormatToRealPipe } from 'src/app/infra/pipes/format-to-real.pipe';

@NgModule({
  declarations: [FormatToRealPipe],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule, FormatToRealPipe],
})
export class SharedModule {}
