import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../components/input/input.component';
import { IconModule } from '../components/icon/icon.module';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  exports: [
      InputComponent
  ]
})
export class ComponentsModule { }
