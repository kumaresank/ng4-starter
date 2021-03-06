import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('assets/country.json')
  }

}
