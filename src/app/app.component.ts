import { Component } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lunar-dynamo-app';
  public width: number = window.innerWidth;
  public isOpen: boolean = this.width >= 960;
  private widthSub: ReplaySubject<number> = new ReplaySubject<number>();

  constructor () {
    this.widthSub.next(this.width);
    window.addEventListener('resize', ()=>{
      this.width = window.innerWidth;
      this.widthSub.next(this.width);
    });
  }

  public widthObs() : Observable<number>{
    return this.widthSub.asObservable();
  }

}
