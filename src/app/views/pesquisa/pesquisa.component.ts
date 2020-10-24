import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/shared/alertas.service';
import { PesquisaService } from './pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  dados: any;
  private queryCampos: any;

  constructor(private router: Router, private pesquisaService: PesquisaService, private alertasService: AlertasService) { }

  ngOnInit(): void {
    if("queryCampos" in sessionStorage)
      this.queryCampos = JSON.parse(sessionStorage.getItem("queryCampos"));
    else{
      this.router.navigate([""]);
      return;
    }
      
    this.pesquisar();
  }

  pesquisar(){
    let pesquisaQuery = "";
    
    this.queryCampos.ano ? pesquisaQuery += "pl_disc+=+'"+this.queryCampos.ano+"'+and+" : "";
    this.queryCampos.metodo ? pesquisaQuery += "pl_discmethod+=+'"+this.queryCampos.metodo+"'+and+" : "";
    this.queryCampos.nome ? pesquisaQuery += "pl_name+=+'"+this.queryCampos.nome+"'+and+" : "";
    this.queryCampos.local ? pesquisaQuery += "pl_facility+=+'"+this.queryCampos.local+"'+and+" : "";

    var lastIndex = pesquisaQuery.lastIndexOf("+and+");

    pesquisaQuery = pesquisaQuery.substring(0, lastIndex);

    if(!pesquisaQuery){
      this.alertasService.erro("Nenhum campo foi preenchido!");
      return;
    }

    this.pesquisaService.pesquisar(pesquisaQuery)
      .subscribe(resp => {
        this.dados = resp;
      });
  }

}
