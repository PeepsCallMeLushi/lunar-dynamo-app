import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fc-rules',
  templateUrl: './fc-rules.component.html',
  styleUrls: ['./fc-rules.component.scss']
})
export class FcRulesComponent implements OnInit {

  @Input() rules: any[] = [];


  constructor() { }

  ngOnInit() {
  }

}
