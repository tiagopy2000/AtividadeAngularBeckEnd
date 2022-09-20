
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

///componetes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


//paginas
import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CadastroCreateComponent } from './views/cadastro/cadastro-create/cadastro-create.component';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    CadastroCreateComponent,

   
  
   
 


   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
