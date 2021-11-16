import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { ViewdatabaseFileComponent } from './viewdatabase-file/viewdatabase-file.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NewsCreateComponent } from './news-create/news-create.component';
@NgModule({
  declarations: [
    AppComponent,
    UploadfileComponent,
    ViewdatabaseFileComponent,
    HomeComponent,
    NewsCreateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatFormFieldModule,
    
    MatRippleModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
