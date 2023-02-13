import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activatedRegion: string = '';
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  getClassCss( region: string ): string {
    return (region === this.activatedRegion ) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activeRegion( region: string) {
    if ( region === this.activatedRegion ) { return; }

    this.activatedRegion = region;
    this.countries = [];

    this.countryService.getRegion( region )
      .subscribe( ( countries ) => this.countries = countries );
  }

}
