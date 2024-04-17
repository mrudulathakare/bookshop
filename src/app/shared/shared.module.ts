import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { SharedPipe } from './shared.pipe';

@NgModule({
  declarations: [SharedPipe],
  imports: [CommonModule],
  exports: [SharedPipe],
})
export class SharedModule {}
