import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformPipe } from './transform.pipe';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TransformPipe
  ],
  exports: [
    TransformPipe
  ]
})
export class SharedModule { }
