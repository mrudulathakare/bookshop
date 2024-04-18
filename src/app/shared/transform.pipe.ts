import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform',
  standalone: true
})
export class TransformPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
