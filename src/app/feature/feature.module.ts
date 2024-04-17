import { SharedModule } from './../shared/shared.module';
//import { FeatureModule } from './feature.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  declarations: [
    //FeatureModule,
    FeatureComponent,
  ],
  imports: [CommonModule],
  exports: [],
})
export class FeatureModule {}
