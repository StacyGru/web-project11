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
    newCard.status = this.getBoolean();
    return newCard;
  }

  getBoolean()
  {
    let num = Math.random() * (1 - 0) + 0;
    if (num == 1)
      return true;
    else
      return false;
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