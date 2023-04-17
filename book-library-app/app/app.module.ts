import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { ApiService } from 'C:/Users/Kurnool Ramesh/books-library-app/projects/open-library/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
