//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'removeSpaces' })

export class RemoveSpacesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    //.replace(/ /g,'');
    return value.replace(/[\s]/g, '').toLowerCase();
  }
}

/*
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RemoveSpacesModule { }
*/