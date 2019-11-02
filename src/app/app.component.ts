import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lunar-dynamo-app';
  public width: number = window.innerWidth;
  public isOpen: boolean = this.width >= 960;

  constructor () {

    window.addEventListener('resize', ()=>{
      this.width = window.innerWidth;
    });
  }

}
