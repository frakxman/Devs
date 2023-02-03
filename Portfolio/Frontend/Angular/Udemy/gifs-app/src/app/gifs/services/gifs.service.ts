import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiUrl: string = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'YL0unkxqscv83SNXW0W4WxnAKhT7YZHa';
  private _history: string[] = [];

  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor( private http: HttpClient ) {
      // One Way
      this._history = JSON.parse( localStorage.getItem('history')! ) || [];
      // Second way
      // if (localStorage.getItem('history')) {
      //   this._history = JSON.parse( localStorage.getItem('history')! )
      // }
      this.results = JSON.parse( localStorage.getItem('results')! ) || [];
  }

  searchGifs( query: string ) {

    query = query.trim().toLowerCase();

    if ( !this._history.includes( query )) {
      this._history.unshift( query );
      this._history = this._history.splice(0, 15);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey )
      .set('limit', '15' )
      .set('q', query )

    this.http.get<SearchGifsResponse>(`${ this.apiUrl }/search`, { params })
      .subscribe( ( resp ) => {
        console.log( resp.data );
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      })
  }
}
