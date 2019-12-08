import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntervalsPageRoutingModule } from './intervals-routing.module';

import { IntervalsPage } from './intervals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntervalsPageRoutingModule
  ],
  declarations: [IntervalsPage]
})
export class IntervalsPageModule {}
