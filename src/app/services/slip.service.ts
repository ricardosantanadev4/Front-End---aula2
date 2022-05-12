import { Injectable } from '@angular/core';
// HttpClient comunicacao do get, post put
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//  retry falhou uma vez tenta novamente
import { retry, catchError } from 'rxjs/operators';
import { Root } from '../models/slip';

@Injectable({
  providedIn: 'root'
})
export class SlipService {
  // url da api
  url = 'https://api.adviceslip.com/advice'; // api rest fake

  // injetando o HttpClient
  // no construdor e ande e passado os servicos nossas injecoes de dependencias
  constructor(private httpClient: HttpClient) { }

  // Headers
  //  Headers cabecalho da requisicao
  // nesse caso a resposta que agente esta esperando e um json
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Observable na hora que chegar a requisicao ele vai mapear automaticamente do tipo Root
  getSlip(): Observable<Root> {
    return this.httpClient.get<Root>(this.url)
      // se falhar uma vez ele tenta novamente por duas vezes
      .pipe(retry(2));
  }
}
