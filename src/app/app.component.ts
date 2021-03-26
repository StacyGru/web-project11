import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{

  title = 'profect11';

  cardsArray : Card[] = [];

  ngOnInit()
  {
    for (let i = 1; i <= 10; i++) 
    {
      const init = this.initNewCard(i);
      this.cardsArray.push(init);
    }
    console.log(this.cardsArray);
  }

  initNewCard(i: number)
  {
    let newCard = new Card();
    newCard.id = i;
    newCard.name = 'Карточка №'+newCard.id;
    newCard.status = Boolean(Math.round(Math.random()));
    return newCard;
  }

  deleteCard(id: any)
  {
    this.cardsArray.splice(id, 1);
  }

  cardNum = 10;

  addCard()
  {
    const init = this.initNewCard(this.cardNum+1);
    this.cardsArray.push(init);
    this.cardNum++;
  }

}

@Directive() class Card
{
  public id: number | undefined;
  public name: string | undefined;
  public status: boolean | undefined;

  constructor()
  {

  }
}