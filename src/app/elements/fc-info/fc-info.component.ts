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
      description:'',
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
      description: '',
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
      description: '',
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
      description: '',
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

  public fcRoles: any[] = [
    {
      header: 'Bai Hu',
      description: '',
      rules: [
        {
          icon: 'people_alt',
          rule: 'The FC Leader',
        },
      ]
    },
    {
      header: 'Hakutei',
      description: '',
      rules: [
        {
          icon: 'people_alt',
          rule: 'The FC Officers',
        },
      ]
    },
    {
      header: 'Storm Tiger',
      description: '',
      rules: [
        {
          icon: 'people_alt',
          rule: 'The FC trusted people with almost as much power as an officer but not with as much decision power',
        },
      ]
    },
    {
      header: 'White Tiger',
      description: '',
      rules: [
        {
          icon: 'people_alt',
          rule: 'The FC trusted people who have been with us for a bit',
        },
      ]
    },
    {
      header: 'Tiger Cub',
      description: '',
      rules: [
        {
          icon: 'people_alt',
          rule: 'The FC people who have just recently joined',
        },
      ]
    },
  ]

  public modInfo: any[] = [
    {
      header: 'The FC Leader, moderators and storm tigers must',
      description: '',
      rules: [
        {
          icon: 'policy',
          rule: 'Be impartial at all times when it comes to decisions',
        },
        {
          icon: 'policy',
          rule: 'Not take a decision when they can\'t be impartial and step out in a conflict, allowing another member to intervene',
        },
        {
          icon: 'policy',
          rule: 'Take temporary action if they\'re the only ones available, if they\'re partial then their judgment must be evaluated by other officers',
        },
        {
          icon: 'policy',
          rule: 'Not be contested by anyone else besides the members involved',
        },
      ]
    },
    {
      header: 'FC leader, officer and storm tiger decisions can',
      description: '',
      rules: [
        {
          icon: 'policy',
          rule: 'Be contested',
        },
        {
          icon: 'policy',
          rule: 'Be overruled',
        },
        {
          icon: 'policy',
          rule: 'Be re-evaluated',
        },
      ]
    },
    {
      header: 'FC leader decisions',
      description: '',
      rules: [
        {
          icon: 'policy',
          rule: 'If the decision is contested, 3 officers must evaluate the decision, if it passes, it carries on, if it fails, the leader must take another decision',
        },
        {
          icon: 'policy',
          rule: 'If the decision is constantly contested but constantly passed, the FC leader must pass a final undisputed decision',
        },
        {
          icon: 'policy',
          rule: 'If the decision is constantly contested but constantly failed, the FC leader must appoint an officer and a storm tiger to decide an action instead of the leader',
        },
      ]
    },
  ]

  public eventRules: any[] = [
    {
      header: 'Event pre-requisits',
      description: '',
      rules: [
        {
          icon: 'policy',
          rule: 'Please have the event\'s content requisits met before attending the event (E.G. Sephirot (EXTREME), have the item Level necessary, content unlocked and ready to enter)',
        },
        {
          icon: 'policy',
          rule: '(BEFORE THE DAY OF THE EVENT) If help is needed to unlock the content for an event, please ask for said help before the day when event starts, we can even organise a day dedicated to only UNLOCKING the content',
        },
        {
          icon: 'policy',
          rule: '(ON THE DAY OF THE EVENT) If members forget to unlock the content and unlocking can prove to be lengthy or otherwise cause the event to be severely delayed, the member can be left behind',
        },
        {
          icon: 'policy',
          rule: 'If the majority agrees to, even during event time content can be unlocked for members that forgot to unlocking it',
        },
        {
          icon: 'policy',
          rule: 'Not being able to meet the requisits before the event due to irl issues (however they may be) is understandable, forgetfulness not so much, lazyness isn\'t understandable at all',
        },

        {
          icon: 'policy',
          rule: '(MAPS ONLY) Everyone must bring at least a map, unless the group has stated that it\'s alright to not have brought one (Please ask first)',
        },
      ]
    },
    {
      header: 'Event looting',
      description: '',
      rules: [
        {
          icon: 'policy',
          rule: '(TRIALS AND RAIDS) Everyone is allowed to roll for anything unless it was otherwise stated (like farming a gear piece for a specific member)',
        },
        {
          icon: 'policy',
          rule: '(MAPS ONLY) Default rule is for everyone to be allowed to roll, but if it is agreed to be owner only then it\'ll be applied to every map of that group',
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
