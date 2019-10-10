import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./header.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AppRouting } from './app.routing';


@NgModule({
  declarations: [
    
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent
  ],
  
  exports: [
    HeaderComponent,
    ShoppingListAddComponent,
    ShoppingListComponent
      ],
     
  imports: [
    BrowserModule, AppRouting
  ],
})
export class ChildModule {}
