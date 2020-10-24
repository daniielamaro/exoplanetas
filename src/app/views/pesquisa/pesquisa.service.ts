import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PesquisaService {

  constructor(private router: Router, private http: HttpClient) {}

  pesquisar(where: string){
    return this.http.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_disc,pl_discmethod,pl_name,pl_facility&format=json&where="+where);
  }
  
}
