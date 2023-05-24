import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviePreviewComponent } from './movieList/movie-preview/movie-preview.component';
import { MovieDettailComponent } from './movieList/movie-dettail/movie-dettail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MoviePreviewComponent,
    MovieDettailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
