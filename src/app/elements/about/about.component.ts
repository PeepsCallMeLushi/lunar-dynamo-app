import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BigPictureComponent } from './big-picture/big-picture.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public aboutInfo: any[] = [
    {
      name: 'Lunar Dynamo',
      img: '../../../assets/lodestone icon.png',
      realImg: '../../../assets/lodestone icon.png',
      desc: 'Our Final Fantasy XIV Grand Company and Discord Community. Casual and friendly FC that heavily believes on the premisse that everyone has their own life outside of the game and as such we just want a nice place where we can enjoy our in-game time',
      buttons: [
        {
          sm: 'Lodestone',
          link: 'https://eu.finalfantasyxiv.com/lodestone/freecompany/9234631035923312050/',
        }
      ]
    },
    {
      name: 'GreteLyn/Greteh',
      img: '../../../assets/bongo cub.png',
      realImg: '../../../assets/259970_Lushi Slappy.gif',
      desc: 'Thanks to Lyn we have a bongo Byakko Cub, isn\'t that amazing? This is the image used in the this site\'s background and discord picture, more social media links in the the twitter\'s pinned post',
      buttons: [
        {
          sm: 'Facebook',
          link:'https://www.facebook.com/gretehart',
        },
        {
          sm: 'Twitter',
          link: 'https://twitter.com/GreteLynK?s=17',
        },
        {
          sm: 'Tumblr',
          link: 'https://gretehart.tumblr.com/',
        },
      ]
    },
    {
      name: 'Megamint',
      img: '../../../assets/254423_comm for peepscallmelushi 1280x1080 res.jpg',
      realImg: '../../../assets/254423_comm for peepscallmelushi 1280x1080 res.jpg',
      desc: 'Mint\'s style was just too stylish to not want to comission them, look at what they did to our boy, he looking good now! This image is being used as our discord\'s invite link banner',
      buttons: [
        {
          sm: 'Instagram',
          link: 'https://www.instagram.com/megamint07/',
        },
        {
          sm: 'Twitter',
          link: 'https://twitter.com/megamint07?s=17',
        },
      ]
    },
  ]

  constructor(private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  public openLink(link: string): void {
    window.open(link, '_blank');
  }

  public openImage(image: string): void {
    this.dialogRef.open(BigPictureComponent, {
      data: {
        image: image,
      },
    });
  }

}
