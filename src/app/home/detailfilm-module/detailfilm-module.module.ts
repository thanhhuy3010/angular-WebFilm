import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailfilmLayoutComponent } from './detailfilm-layout/detailfilm-layout.component';
import { DetailInfoComponent } from './detailfilm-layout/detail-info/detail-info.component';

@NgModule({
  declarations: [DetailfilmLayoutComponent, DetailInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [DetailfilmLayoutComponent]
})
export class DetailfilmModuleModule { }
