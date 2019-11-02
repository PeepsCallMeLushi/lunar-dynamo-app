import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-big-picture',
  templateUrl: './big-picture.component.html',
  styleUrls: ['./big-picture.component.scss']
})
export class BigPictureComponent implements OnInit {

  public image: string;
  public width: number = (window.innerWidth/4) * 3;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private app: AppComponent) {
    this.image = this.data.image;
  }

  ngOnInit() {
    this.app.widthObs().subscribe((width)=>{
      this.width = (width / 4) * 3;
    });
  }

}
