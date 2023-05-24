import { Component } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  movie?: any

  constructor(private movieService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.movieService.getData().subscribe((movie: any) => {
      this.movie = movie;
      console.log(this.movie); // Stampa l'intero oggetto movie nella console

    });
  }
}


