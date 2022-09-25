import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import {cadastro } from './cadastro.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseurl = "http://localhost:3001/login"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

   }
   showMessege(msg: string): void{
    this.snackBar.open(msg, 'x', {
      duration: 6000,
      verticalPosition: "bottom"
    });
   }

   create(cadastro: cadastro): Observable<cadastro>{
    return this.http.post<cadastro>(this.baseurl, cadastro)
   }
}
