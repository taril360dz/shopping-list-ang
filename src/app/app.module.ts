import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './Components/ItemsListComponent/ItemsListComponent';
import { ItemFormComponent } from './Components/ItemFormComponent/ItemFormComponent';
import { ItemService } from './Services/ItemService';
import { ItemComponent } from './Components/ItemComponent/ItemComponent';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemFormComponent,
    ItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
