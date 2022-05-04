import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // cards e a variavel Card[] indica que essa variavel e do tipo array =[] indica que a variavel vai receber um array vazio 
  cards: Card[] = []

  constructor() { }

  // ngOnInit toda ves que iniciar o componet ele vai chamar o que estiver dentro dele
  ngOnInit(): void {
    this.initCards()
    // exibe a variavel para ver se os objetos foram adicionado no array
    console.log(this.cards)
  }

  initCards(){
    // essas linhas cria um novo card
    // cria uma variavel card do tipo Card recebendo um objeto vazio
    let card: Card = {};
    // acessa variaveis da Classe Card e seta os valores tipo string
    card.title = "Saldo";
    card.subTitle = "Saldo em contas";
    card.color="primary"

    // essas linhas cria um novo card
    let card1: Card = {};
    card1.title = "Saldo1";
    card1.subTitle = "Saldo em Conta 1"
    card1.color = "success"

    // essas linhas cria um novo card
    let card2: Card = {}
    card2.title="Teste";
    card2.subTitle="Divida de teste";
    card2.color="danger"

    // essas linhas cria um novo card
    let card3:Card ={};
    card3.title="Teste1";
    card3.subTitle="Divida de teste";
    card3.color="info"
    // adiciona os objetos dentro do array
    // push() adiciona apos o ultimo objeto do array
    this.cards.push(card);
    this.cards.push(card1);
    this.cards.push(card2);
    this.cards.push(card3)
  }

}
