import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../components/input/input.component';
import { IconModule } from '../components/icon/icon.module';
import { ButtonComponent } from '../components/button/button.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { CardsComponent } from '../components/cards/cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputComponent, ButtonComponent, TabsComponent, CardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IconModule,
    RouterModule
  ],
  exports: [
      InputComponent,
      ButtonComponent,
      TabsComponent,
      CardsComponent
  ]
})
export class ComponentsModule { }
