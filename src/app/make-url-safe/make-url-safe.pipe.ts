
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'makeUrlSafe' })

export class MakeUrlSafePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.replace(/[^a-zA-Z0-9]/g,'_').toLowerCase();
  }
}

