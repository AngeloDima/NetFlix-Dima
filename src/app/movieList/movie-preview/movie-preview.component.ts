import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.movieItem)
    console.log("ciao")
  }

  @Input()
  movieItem?: any



}




