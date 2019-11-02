import { Component, OnInit } from '@angular/core';
import { SideNavElement } from 'src/app/shared/models/side-nav-element.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sideNavElements: SideNavElement[] = [
    {
      icon: 'input',
      desc: 'Check out our iLevel calculator',
      text: 'iLevel Calculator',
      route: '/iLevel-Calculator',
    },
    {
      icon: 'link',
      desc: 'Check out some of the links we believe to help you around',
      text: 'Links',
      route: '/links',
    },
    {
      icon: 'description',
      desc: 'Check out our FC/Community rules',
      text: 'Rules',
      route: '/fc-info'
    },
    {
      icon: 'supervised_user_circle',
      desc: 'Check out Info/Credits to people that have provided us with their content',
      text: 'About',
      route: '/about'
    }
  ]

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  public openLink(link: string): void {
    this.route.navigate([link]);
  }

}
