import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailfilmLayoutComponent } from './detailfilm-layout/detailfilm-layout.component';
import { DetailInfoComponent } from './detailfilm-layout/detail-info/detail-info.component';
import { TypeDetailComponent } from './detailfilm-layout/detail-info/type-detail/type-detail.component';

@NgModule({
  declarations: [DetailfilmLayoutComponent, DetailInfoComponent, TypeDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [DetailfilmLayoutComponent]
})
export class DetailfilmModuleModule { }
