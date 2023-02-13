import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: Country[];

  constructor(private actRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.actRoute.params
      .pipe(
        switchMap( ( { id } ) => this.countryService.getCountry( id )),
        tap( console.log )
      )
      .subscribe( country => { this.country = country } );

    // Other way to do
      // .subscribe( ({ id }) => {
      //   console.log( id );

      //   this.countryService.getCountry( id )
      //     .subscribe( country => this.country = country )
      // })
  }

}
