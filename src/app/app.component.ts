import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'project11';
  myNumber = 10;
  flag = true;
  buttonEnabled = false;
 
  blockX = 0;
  blockY = 0;

  inputValue = 'text';

  @ViewChild('someInput') someInputName: ElementRef | undefined;

  someArray: string[] = ['первый', 'второй', 'третий'];

  fontSize = 15;

  constructor()
  {
    setTimeout(() =>
    {
      this.buttonEnabled = true;
      this.fontSize = 20;
    }, 1500);
  }

  ngOnInit()
  {
    console.log(this.someInputName);
  }

  ngAfterViewInit()
  {
    console.log(this.someInputName);
  }

  hello()
  {
    return 'Hello world';
  }

  getCoords(e: MouseEvent)
  {
    this.blockX = e.offsetX;
    this.blockY = e.offsetY;
  }

  getData(elm: HTMLInputElement)
  {
    // console.log(elm);
    console.log(this.someInputName?.nativeElement.value);
  }
}
