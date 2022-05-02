import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ColorpickerComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
