import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModuleModule } from './component/layouts/main-module/main-module.module';
import { HomeComponent } from './component/views/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
