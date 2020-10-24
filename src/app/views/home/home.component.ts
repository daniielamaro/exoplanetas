import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/shared/alertas.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contExoplanetasconfirmados: number;
  listaMetodoDisc: any;
  listaLocalDisc: any;

  pesquisarForm: FormGroup;

  constructor(private homeService: HomeService, private alertasService: AlertasService, private router: Router) { }

  ngOnInit(): void {
    this.pesquisarForm = new FormGroup({
      ano: new FormControl(''),
      metodo: new FormControl(''),
      nome: new FormControl(''),
      local: new FormControl('')
    });

    this.homeService.getContagem()
      .subscribe(resp => {
        let respTemp = resp;

        this.contExoplanetasconfirmados = respTemp[0]["count(*)"];
      });

    this.homeService.getListaMetodoDisc()
      .subscribe(resp => {
        this.listaMetodoDisc = resp;

        this.listaMetodoDisc = Array.from(new Set(this.listaMetodoDisc.map((item: any) => item["pl_discmethod"])));
      });

    this.homeService.getListaLocalDisc()
      .subscribe(resp => {
        this.listaLocalDisc = resp;

        this.listaLocalDisc = Array.from(new Set(this.listaLocalDisc.map((item: any) => item["pl_facility"])));
      });
  }

  pesquisar(){

    let queryCampos = {
      ano: this.pesquisarForm.get("ano").value,
      metodo: this.pesquisarForm.get("metodo").value,
      nome: this.pesquisarForm.get("nome").value,
      local: this.pesquisarForm.get("local").value
    };

    if(!queryCampos.ano && !queryCampos.metodo && !queryCampos.nome && !queryCampos.local){
      this.alertasService.erro("Nenhum campo foi preenchido!");
      return;
    }

    sessionStorage.setItem("queryCampos", JSON.stringify(queryCampos));
    this.router.navigate(['/pesquisa']);
  }

}
