import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailfilmLayoutComponent } from './detailfilm-layout/detailfilm-layout.component';
import { HomepageModuleModule } from '../homepage-module/homepage-module.module';
import { DetailLichchieuComponent } from './detailfilm-layout/detail-lichchieu/detail-lichchieu.component';
import { MdbootstrapModule } from 'src/app/_core/common/shareModule/mdbootstrap/mdbootstrap.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DetailfilmLayoutComponent, DetailLichchieuComponent],
  imports: [
    CommonModule , HomepageModuleModule , MdbootstrapModule,FormsModule,RouterModule
  ],
  exports: [DetailfilmLayoutComponent]
})
export class DetailfilmModuleModule { }
