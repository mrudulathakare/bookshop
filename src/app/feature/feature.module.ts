//import { FeatureModule } from './feature.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
@NgModule({
  declarations: [
    //FeatureModule,
  ],
  imports: [CommonModule, SharedModule],
  exports: [SharedModule],
})
export class FeatureModule {}
