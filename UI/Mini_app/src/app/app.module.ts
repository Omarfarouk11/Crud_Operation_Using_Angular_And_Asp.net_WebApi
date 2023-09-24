import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CategoryComponent } from './Components/category/category.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { ViewCategoryComponent } from './Components/view-category/view-category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    ViewCategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
