import { Component, OnInit } from '@angular/core';
import { LinkItem } from 'src/app/shared/models/link-item.model';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  public linkItems: LinkItem[] = [
    {
      header: 'Starter Cheat Sheet',
      description: 'A cheat sheet to understand FF\'s symbology',
      links: [
        {
          name: 'Link',
          link:'https://i.redd.it/203h9nbmebw21.png'
        }
      ]
    },
    {
      header: 'Ui Management and Macros',
      description: 'Tips to manage the UI and make macros',
      links: [
        {
          name: 'Link 1',
          link: 'https://www.guilded.gg/Pure-FC/groups/xdVaw4Dk/channels/03d3be18-afd0-48a8-ade0-38795d4f62a5/docs/251051830'
        },
        {
          name: 'Link 2',
          link: 'https://imgur.com/a/FHPeV'
        }
      ]
    },
    {
      header: 'Gardening',
      description: 'Gardening tips and guides',
      links: [
        {
          name: 'Link',
          link: 'http://www.ffxivgardening.com/guide-to-gardening'
        }
      ]
    },
    {
      header: 'Gathering',
      description: 'Helpful gathering resources',
      links: [
        {
          name: 'Mining Nodes',
          link: 'https://ffxiv.consolegameswiki.com/wiki/Mining_Node_Locations'
        }
      ]
    },
    {
      header: 'Leveling 1-70',
      description: 'Helpful tips to level your classes',
      links: [
        {
          name: 'Link',
          link: 'https://www.reddit.com/r/ffxiv/comments/bd7hd5/the_guide_to_leveling_your_alt_jobs_1_to_70_in/'
        },
      ]
    },
    {
      header: 'Basic Tanking Visual Guide',
      description: 'Read this, seriously, even if you aren\'t a tank!',
      links: [
        {
          name: 'Link',
          link: 'https://cdn.discordapp.com/attachments/538862212345888838/541248355389538304/0_PXOlMX1ljz__RgTLu2q9A1VCipXExTj9T7hV-RWBk.png'
        }
      ]
    },
    {
      header: 'Crystal Tower Unlock',
      description: 'How to unlock the crystal tower questline, A.K.A.: Pain',
      links: [
        {
          name: 'Link 1',
          link: 'https://www.ign.com/wikis/ff14/Unlocking_the_Crystal_Tower'
        },
        {
          name: 'Link 1',
          link: 'https://ffxiv.consolegameswiki.com/wiki/Crystal_Tower_Quests'
        }
      ]
    },
    {
      header: 'Map Locations',
      description: 'If you\'re having trouble finding where your map is, check this!',
      links: [
        {
          name: 'Link',
          link: 'https://www.dopr.net/ff14playguide/TreasureHuntG10'
        }
      ]
    },
    {
      header: 'Beast Tribes',
      description: 'How to unlock Beast Tribes',
      links: [
        {
          name: 'Namazu',
          link: 'https://bestinslot.co/ffxiv-how-to-unlock-namazu-beast-tribe-quest/'
        }
      ]
    },
    {
      header: 'Mog Board',
      description: 'Shhhh, don\'t tell SE',
      links: [
        {
          name: 'Mog Board',
          link: 'https://mogboard.com/'
        },
        {
          name: 'Universalis',
          link: 'https://universalis.app/'
        }
      ]
    },
    {
      header: 'Discord Link',
      description: 'To gain access to the discord server you must first request it from a member',
      links: []
    }
  ]

  constructor() { }

  ngOnInit() { }

  public openLink(link:string): void {
    window.open(link, '_blank');
  }

}
