
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component'
import { LoginComponent } from './views/login/login.component'
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CadastroCreateComponent } from './views/cadastro/cadastro-create/cadastro-create.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'produtos',
    component: ProdutosComponent
  },

  
  {
    path: 'contato',
    component: ContatoComponent 
  },
  
  {
    path: 'login',
    component: LoginComponent 
  }, 
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'cadastro1',
    component: CadastroCreateComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
