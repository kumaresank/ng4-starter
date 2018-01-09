import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries = [];

  constructor(private county: CountryService) { }

  ngOnInit() {
    this.county.getCountries()
      .subscribe((res: any) => {
        this.countries = res
      }, (error) => {
        console.log(error);
      })
  }

}
