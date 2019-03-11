import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTrailerComponent } from './modal-trailer/modal-trailer.component';

@NgModule({
  declarations: [ModalTrailerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalTrailerComponent
  ]
})
export class ModalTrailerModule { }
