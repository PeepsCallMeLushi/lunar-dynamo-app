import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lunar-dynamo-app';
  private width: number = window.innerWidth;

  constructor () {
    window.addEventListener('resize', ()=>{
      this.width = window.innerWidth;
    })
  }

}
