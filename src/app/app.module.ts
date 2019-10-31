import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
  MdToolbarModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdCheckboxModule,
  MdRadioModule
 } from  '@angular/material';





const appRoutes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'second',      component: SecondComponent },
  {
    path: 'hello',
    component: HelloComponent,
    data: { title: 'hello' }
  },
  { path: 'home',
    redirectTo: '/home'
  },
  { path: 'second',
    redirectTo: '/second'
  },
  { path: '**', component: HelloComponent }  //default routing
];

@NgModule({
  imports:      [ BrowserModule,FormsModule ,  FormsModule, BrowserAnimationsModule, MdToolbarModule, MdTabsModule, MdButtonModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdCheckboxModule, MdRadioModule ,
  
  RouterModule.forRoot(   // configure in routmodule
      appRoutes
    )],
  declarations: [ AppComponent, HelloComponent,HomeComponent,SecondComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
