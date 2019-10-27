import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fc-rules',
  templateUrl: './fc-rules.component.html',
  styleUrls: ['./fc-rules.component.scss']
})
export class FcRulesComponent implements OnInit {

  public rules: any[] = [
    {
      header: 'COMMUNITY RULES',
      rules: [
        {
          icon: 'people_alt',
          rule: 'Be respectful of other members, avoid racial slurs and degrading terms',
        },
        {
          icon: 'policy',
          rule: 'Avoid pushing your religious and/or political views/propaganda on others',
        },
        {
          icon: 'healing',
          rule: 'It\'s alright to have an opinion, it\'s not alright to think of it as absolute or not respect others\'. Be open to another view and healthy discussions.',
        },
        {
          icon: 'people_alt',
          rule: 'Avoid talk behind others\' back, if you have a problem with someone, try to solve it with civility. There\'s close to no room for senseless drama.',
        },
        {
          icon: 'textsms',
          rule: 'Avoid bringing the conflict into public chat, try to solve it together. If help is needed an officer or myself can help.',
        },
        {
          icon: 'sentiment_dissatisfied',
          rule: 'There\'s no such system as emitting X amount of warnings before an action, the outcome of a conflict is decided on the spot with impartiality',
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
