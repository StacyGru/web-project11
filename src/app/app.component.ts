import { AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'profect11';

  // написать алгоритм который вызовет конструктор класса (со случайной генерацией статуса)
  // рекомендуется создавать модели данных

  // interface myDet
  // {
  //   id: number;
  //   name: string;
  //   status: boolean;
  // }
  
  // cardsArray : any;

  // createArray(number = 10)
  // {
  //   for(var i = 1; i < number; i++)
  //   {
  //     // let item : myDet;
  //     // this.item.id = i;
  //     // this.item.name = 'Название';
  //     // this.status = this.getBoolean();
  //     this.cardsArray.push(i, 'Название', this.getBoolean());
  //   }
  // }

  // getBoolean()
  // {
  //   let num = Math.random() * (1 - 0) + 0;
  //   if (num == 1)
  //     return true;
  //   else
  //     return false;
  // }

  class Cards
  {
    
  }
}