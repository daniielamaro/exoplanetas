import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HomeService {

  constructor(private router: Router, private http: HttpClient) {}

  getContagem(){
    return this.http.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=count(*)&format=json");
  }

  getListaMetodoDisc(){
    return this.http.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_discmethod&format=json");
  }

  getListaLocalDisc(){
    return this.http.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_facility&format=json");
  }
}
