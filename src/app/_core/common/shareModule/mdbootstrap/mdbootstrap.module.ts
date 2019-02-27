import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, WavesModule, InputsModule, ButtonsModule, IconsModule, CheckboxModule, CardsFreeModule, InputUtilitiesModule } from 'angular-bootstrap-md'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  
  imports: [
    CommonModule,ModalModule ,WavesModule, InputsModule, ButtonsModule , IconsModule ,CheckboxModule, CardsFreeModule,
    InputUtilitiesModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  exports:[
    ModalModule ,WavesModule, InputsModule, ButtonsModule , IconsModule , CheckboxModule ,  FormsModule, CardsFreeModule,
    InputUtilitiesModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class MdbootstrapModule { }
