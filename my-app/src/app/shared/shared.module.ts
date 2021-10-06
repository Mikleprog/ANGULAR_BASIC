import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
