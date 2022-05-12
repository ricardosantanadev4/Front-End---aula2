import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Movimentacao } from 'src/app/models/movimentacao';
import { Root } from 'src/app/models/slip';
import { SlipService } from 'src/app/services/slip.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // cards e a variavel Card[] indica que essa variavel e do tipo array =[] indica que a variavel vai receber um array vazio 
  cards: Card[] = []
  movimentacoes: Movimentacao[] = []

  // importando o servico
  constructor(private slipService: SlipService) { }

  slip?: Root;

  // ngOnInit toda ves que iniciar o componet ele vai chamar o que estiver dentro dele
  ngOnInit(): void {
    this.initCards();
    // exibe a variavel para ver se os objetos foram adicionado no array
    console.log(this.cards);
    this.initMovimentacao();
    console.log(this.movimentacoes);
    this.getSlip();
  }

  initCards() {
    // essas linhas cria um novo card
    // cria uma variavel card do tipo Card recebendo um objeto vazio
    let card: Card = {};
    // acessa variaveis da Classe Card e seta os valores tipo string
    card.title = "Saldo";
    card.subTitle = "Saldo em contas";
    card.color = "primary"

    // essas linhas cria um novo card
    let card1: Card = {};
    card1.title = "Saldo1";
    card1.subTitle = "Saldo em Conta 1"
    card1.color = "success"

    let card2: Card = {};
    card2.title = "Saldo2";
    card2.subTitle = "Saldo em conta 2";
    card2.color = "danger";

    // adiciona os objetos dentro do array
    // push() adiciona apos o ultimo objeto do array
    this.cards.push(card);
    this.cards.push(card1);
    this.cards.push(card2);
  }

  initMovimentacao() {
    // realiza o processo enquanto i for menor que 10
    for (let i = 0; i < 10; i++) {
      //  criar uma variavel tipo Movimentacao recebendo um objeto vazio
      let movimentacao: Movimentacao = {};
      //  com isso e possivel setar os valores concatenados nas variaveis da Classe Movimentecao
      movimentacao.id = i;
      movimentacao.tipo = "despesa" + i;
      movimentacao.nome = "compra" + i;
      movimentacao.valor = "R$" + i;
      movimentacao.data = "09/04/2022";

      //  insere o objeto gerado apos o ultimo elemento do array
      this.movimentacoes.push(movimentacao)
    }
  }

  // Chama o serviço para obtém todos os slips
  getSlip() {
    this.slipService.getSlip().subscribe((data: Root) => {
      this.slip = data;
      console.log(data)
    });
  }
}
