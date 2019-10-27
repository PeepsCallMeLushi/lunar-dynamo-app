import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { iLevels } from 'src/app/shared/models/ilevel.model';
import { MatSlideToggle } from '@angular/material';

@Component({
  selector: 'app-ilevel-calculator',
  templateUrl: './ilevel-calculator.component.html',
  styleUrls: ['./ilevel-calculator.component.scss']
})
export class IlevelCalculatorComponent implements OnInit {

  @ViewChild('consentChecker', { static: false }) concentChecker: MatSlideToggle;
  public hasOffHand: boolean = false;
  public hasConcent: boolean = false;
  public iLevels: iLevels = {
    arm: 0,
    offhand: 0,
    head: 0,
    body: 0,
    hands: 0,
    waist: 0,
    legs: 0,
    feet: 0,
    earrings: 0,
    necklace: 0,
    bracelets: 0,
    ring1: 0,
    ring2: 0
  }
  public totalILevel: number = 0;

  constructor() { }

  ngOnInit() {
    this.verifyLocalStorage();
  }

  private verifyLocalStorage(): void {
    if (!localStorage.getItem('lunarDynamo.user.consent') || localStorage.getItem('lunarDynamo.user.consent') !== "true") {
      this.clearLocalStorage();
      return;
    }
    if (!localStorage.getItem('lunarDynamo.hasOffHand') || !(localStorage.getItem('lunarDynamo.hasOffHand') === "true" || localStorage.getItem('lunarDynamo.hasOffHand') === "false")) {
      this.clearLocalStorage();
      return;
    }
    for (var x in this.iLevels) {
      if (!localStorage.getItem('lunarDynamo.iLevels.' + x)) {
        this.clearLocalStorage();
        return;
      }
    }
    this.getFromLocalStorage()
  }

  private clearLocalStorage(): void {
    localStorage.clear();
    this.hasConcent = false;
  }

  private getFromLocalStorage(): void {
    this.hasConcent = localStorage.getItem('lunarDynamo.user.consent') === "true";
    this.hasOffHand = localStorage.getItem('lunarDynamo.hasOffHand') === "true";

    for (var x in this.iLevels) {
      let lsv = localStorage.getItem('lunarDynamo.iLevels.' + x) ? localStorage.getItem('lunarDynamo.iLevels.' + x) : 0;
      lsv = lsv.toString().match(/[^0-9.]/g) ? 0 : +lsv;
      this.iLevels[x] = lsv;
    }

    this.setTotalIlevel();
  }

  public setTotalIlevel(): void {
    this.totalILevel = this.calulateIlvl();
    if (localStorage.getItem('lunarDynamo.user.consent') && localStorage.getItem('lunarDynamo.user.consent') === "true") {
      this.saveIntoLocalStorage();
    }
  }

  private calulateIlvl(): number {
    let iLevelSum: number = 0;
    for (let x in this.iLevels) {
      if (x === "offhand" && !this.hasOffHand) {
        continue;
      }
      iLevelSum += +this.iLevels[x];
    }
    iLevelSum += this.hasOffHand ? 0 : this.iLevels.arm;
    iLevelSum /= 13;
    return Math.floor(iLevelSum);
  }

  private saveIntoLocalStorage(): void {
    localStorage.setItem('lunarDynamo.user.consent', JSON.stringify(true));
    for (var x in this.iLevels) {
      localStorage.setItem('lunarDynamo.iLevels.' + x, JSON.stringify(this.iLevels[x]));
    }
    localStorage.setItem('lunarDynamo.hasOffHand', JSON.stringify(this.hasOffHand === true));
  }

  public verifyConsent() {
    this.hasConcent = this.concentChecker.checked
    this.concentChecker.checked ? this.saveIntoLocalStorage() : this.clearLocalStorage();
  }

  public controlOffHandInput() {
    this.hasOffHand = !this.hasOffHand;
    this.setTotalIlevel();
  }

  public getInputValue(inputValue: number, inputId: string): void {
    this.iLevels[inputId] = +inputValue;
    this.setTotalIlevel();
    console.log(this.iLevels);
  }


}
