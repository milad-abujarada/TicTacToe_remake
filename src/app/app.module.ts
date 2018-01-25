import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CellServicesService } from './cell/cell-services.service';
import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';


@NgModule({
  declarations: [
    AppComponent,
    CellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CellServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
