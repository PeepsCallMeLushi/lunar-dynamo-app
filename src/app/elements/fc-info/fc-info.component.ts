import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fc-info',
  templateUrl: './fc-info.component.html',
  styleUrls: ['./fc-info.component.scss']
})
export class FcInfoComponent implements OnInit {
  public fcRules: any[] = [
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
    },
    {
      header: 'DISCORD RULES',
      rules: [
        {
          icon: 'keyboard_arrow_up',
          rule: 'The above still apply',
        },
        {
          icon: 'contactless',
          rule: 'Try to post the right things in the right channels at all times',
        },
        {
          icon: 'chat_bubble_outline',
          rule: 'Follow the discord guidelines',
        }
      ]
    },
    {
      header: 'FFXIV SPECIFIC RULES',
      rules: [
        {
          icon: 'keyboard_arrow_up',
          rule: 'The above still apply',
        },
        {
          icon: 'money_off',
          rule: 'Any donation made to the FC, may it be money or furniture, will be awarded with nothing but our gratitude, I apologize if that\'s not enough.',
        },
        {
          icon: 'attach_money',
          rule: 'If you otherwise prefer to sell the item to the FC you may do so but you\'ll be paid the Material cost + hand-work(and preferably less than the Market-board price)',
        },
        {
          icon: 'local_atm',
          rule: 'If asked to craft with materials gathered by the FC, you may or may not take money for the hand-work ( your choice) but never expect the full market-board price, your price must be stated before accepting the job',
        },
        {
          icon: 'local_atm',
          rule: 'If you\'re in need of items or money for crafts, you may ask for them and you  may even receive them without having to repay them, although this is a judgment made by the officer in charge of the FC chest',
        },
        {
          icon: 'verified_user',
          rule: 'May it be compensation via a reward or free labour, you are (obviously) allowed to ask another member to craft/gather something for you as long as it is under terms you can both agree on, else we\'ll have to intervene.',
        },
        {
          icon: 'record_voice_over',
          rule: 'Although the FC thrives to build an healthy community, we are under no obligation to provide you with a crafter/gatherer/helper at moments notice or are obliged to have the tools required for ALL requests, people have their own lives and social obligations, as such we apologise for any inconvenience caused, but please understand we\'re a growing community, maybe you can fill this void in our needs',
        },
        {
          icon: 'not_interested',
          rule: 'Please keep in mind that every donation and/or support you provide to the FC, while rewarded with our gratitude and strengthening of our bonds, does not allow you to violate any of the rules above stated nor does it give you a bypass card for any of them, you shall be treated equally as any other member. If you\'re thriving to become popular for your own good and gratification WITHOUT thinking or caring about the others around you, you\'re simply not welcome and we invite you to leave, after all, you are part of a community, a cell contributing towards a bigger organism.',
        },
      ]
    },
    {
      header: 'MEMBER MISSING RULES',
      rules: [
        {
          icon: 'access_alarm',
          rule: 'Members should warn the staff if they\'re planning on going away from the game for long periods of time, just to let us know',
        },
        {
          icon: 'directions_run',
          rule: 'Members will not be kicked due to innactivity',
        }
      ]
    }
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
