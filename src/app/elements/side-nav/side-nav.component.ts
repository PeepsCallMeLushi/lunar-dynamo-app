import { Component, OnInit, Input } from '@angular/core';
import { SideNavElement } from 'src/app/shared/models/side-nav-element.model';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() public inputSideNav: MatSidenav;

  public sideNavElements: SideNavElement[] = [
    {
      icon: 'input',
      text:'iLevel Calculator',
      route: 'iLevel-Calculator',
    },
    {
      icon: 'link',
      text: 'Links',
      route: 'links',
    },
    {
      icon: 'description',
      text: 'Rules',
      route: 'fc-info'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
