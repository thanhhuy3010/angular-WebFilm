import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, WavesModule, InputsModule, ButtonsModule, IconsModule, CheckboxModule, CardsFreeModule,
  TooltipModule,PopoverModule, InputUtilitiesModule } from 'angular-bootstrap-md'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  
  imports: [
    CommonModule,ModalModule ,WavesModule, InputsModule, ButtonsModule , IconsModule ,CheckboxModule, CardsFreeModule,
    InputUtilitiesModule,
    FormsModule, 
    TooltipModule ,
    PopoverModule,
    ReactiveFormsModule 
  ],
  exports:[
    ModalModule ,WavesModule, InputsModule, ButtonsModule , IconsModule , CheckboxModule ,  FormsModule, CardsFreeModule,
    InputUtilitiesModule,
    TooltipModule ,
    PopoverModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class MdbootstrapModule { }
