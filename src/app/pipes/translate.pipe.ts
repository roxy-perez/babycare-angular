import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'normal':
        return 'normal';
      case 'hard':
        return 'dura';
      case 'soft':
        return 'blanda';
      case 'diarrhea':
        return 'diarrea';
      default:
        return value;
    }
  }
}
