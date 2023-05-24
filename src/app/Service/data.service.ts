import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apyKey = "8d51300dec6f04d30c71b1ce5ce1c37f";
  url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apyKey}`

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.url)

  }

}



