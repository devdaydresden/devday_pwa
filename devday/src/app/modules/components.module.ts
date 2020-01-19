import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../components/input/input.component';
import { IconModule } from '../components/icon/icon.module';
import { ButtonComponent } from '../components/button/button.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { CardsComponent } from '../components/cards/cards.component';
import { RouterModule } from '@angular/router';
import { SessionCardComponent } from '../components/session-card/session-card.component';
import { FavouritButtonComponent } from '../components/favourit-button/favourit-button.component';
import { SessionGridComponent } from '../components/session-grid/session-grid.component';
import { TextareaComponent } from '../components/textarea/textarea.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    TabsComponent,
    CardsComponent,
    SessionCardComponent,
    FavouritButtonComponent,
    SessionGridComponent,
    TextareaComponent
  ],
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
      CardsComponent,
      FavouritButtonComponent,
      SessionCardComponent,
      SessionGridComponent,
      TextareaComponent
  ]
})
export class ComponentsModule { }
