import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MdToolbarModule,MdTabsModule,MdButtonModule,MdInputModule,MdDatepickerModule,MdNativeDateModule,MdCheckboxModule,
MdRadioModule} from  '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: '**', component: HelloComponent }//default routing
];

@NgModule({
  imports:      [ BrowserModule,FormsModule ,  FormsModule, BrowserAnimationsModule, MdToolbarModule, MdTabsModule, MdButtonModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdCheckboxModule, MdRadioModule ,
  
  RouterModule.forRoot( // configure in routmodule
      appRoutes
    )],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
