import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';
import { cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: cadastro = {
    usuario:'',
    senha: ''
  }
  constructor(private CadastroService: CadastroService, private Router: Router) { }

  ngOnInit(): void {
  }
  
   createcadastro(): void{
    this.CadastroService.create(this.cadastro).subscribe(() => {
    this.CadastroService.showMessege('usuario cadastrado!')
     })
   }
   cancelarcadastro(): void{
    this.Router.navigate([''])
   }
   tabelascadastro(): void{
    this.Router.navigate(['/cadastro/tabela'])
   }
}
