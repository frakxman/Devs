import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  `]
})
export class ByCountryComponent {

  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  sugets: Country[] = [];
  showSugets: boolean = false;

  constructor( private countryService: CountryService ) { }

  search( term: string ) {
    this.showSugets = false;
    this.isError = false;
    this.term = term;

    this.countryService.getCountries( term )
      .subscribe( ( countries ) => {
        console.log( countries );
        this.countries = countries;
      }, ( err ) => {
        if (err) {
          this.isError = true;
          this.countries = [];
        }
      })
  }

  sugest( term: string ) {
    this.isError = false;
    this.term = term;
    this.showSugets = true;

    this.countryService.getCountries( term )
      .subscribe(
        countries =>  this.sugets = countries.splice(0,5),
        // (err) => this.sugest = []
      );
  }

}
