import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from './shared/dropdown.directive';
import { ColorChanger } from './shared/colorchanger.directive';
import { Summary } from './shared/summary.pipe';

@NgModule({
  declarations: [
    ColorChanger,
    DropdownDirective,
    Summary
 
  ],
  imports: [
    BrowserModule
  ],
 exports: [
    ColorChanger,
    DropdownDirective,
    Summary
     ],
})
export class SharedModule {}
