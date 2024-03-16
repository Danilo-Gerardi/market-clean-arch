import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatToReal',
})
export class FormatToRealPipe implements PipeTransform {
  transform(value: number): string {
    if (!isNaN(value) && value !== null && value !== undefined) {
      const formattedValue = parseFloat(value.toString()).toFixed(2);
      return 'R$ ' + formattedValue.replace('.', ',');
    }

    return value.toString();
  }
}
