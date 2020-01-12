import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../components/input/input.component';
import { IconModule } from '../components/icon/icon.module';
import { ButtonComponent } from '../components/button/button.component';
import { TabsComponent } from '../components/tabs/tabs.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent, TabsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  exports: [
      InputComponent,
      ButtonComponent,
      TabsComponent
  ]
})
export class ComponentsModule { }
