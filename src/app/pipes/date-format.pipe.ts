import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date): string {
    const datePipe = new DatePipe('en-US');
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (value >= today) {
      return datePipe.transform(value, 'HH:mm');
    } else if (value >= yesterday) {
      return 'Yesterday, ' + datePipe.transform(value, 'HH:mm');
    } else {
      return datePipe.transform(value, 'dd/MM/yyyy HH:mm');
    }
  }
}
