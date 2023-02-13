import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams().set('fields', 'name,altSpellings,capital,flags,population')
  }


  constructor( private http: HttpClient ) { }

  getCountries( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/name/${ term }`
    return this.http.get<Country[]>( url, { params: this.httpParams });
  }

  getCapital( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/capital/${ term }`
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getCountry( id: string ): Observable<Country> {
    const url = `${ this.apiUrl}/alpha/${ id }`
    return this.http.get<Country>( url );
  }

  getRegion( region: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/region/${ region }`
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
}
