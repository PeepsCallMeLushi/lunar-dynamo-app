import { Component, OnInit, Input } from '@angular/core';
import { SideNavElement } from 'src/app/shared/models/side-nav-element.model';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() public inputSideNav: MatSidenav;
  public url: string = '/';

  public sideNavElements: SideNavElement[] = [
    {
      icon: 'home',
      text: 'Home',
      route: '/',
    },
    {
      icon: 'input',
      text:'iLevel Calculator',
      route: '/iLevel-Calculator',
    },
    {
      icon: 'link',
      text: 'Links',
      route: '/links',
    },
    {
      icon: 'description',
      text: 'Rules',
      route: '/fc-info'
    },
    {
      icon: 'supervised_user_circle',
      text: 'About',
      route: '/about'
    }
  ]

  constructor(
    private route: Router
  ) {
    this.route.events.subscribe((data)=>{
      if (data instanceof NavigationStart) {
        this.url = data.url;
      }
    });
  }

  ngOnInit() {
  }

}
