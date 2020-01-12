import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../components/input/input.component';
import { IconModule } from '../components/icon/icon.module';
import { ButtonComponent } from '../components/button/button.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  exports: [
      InputComponent,
      ButtonComponent
  ]
})
export class ComponentsModule { }
