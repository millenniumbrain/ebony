/// <reference path="../stats.ts">
import StatAttributes = Stats.StatAttributes;

import {Helpers} from "../helpers";

export class Skill {
  name: string;
  percentage: StatAttributes;
  constructor(name: string, percentage?: StatAttributes | number) {
    this.name = name;
    if (typeof(percentage) === "object") {
      this.percentage = percentage;
    } else {
      this.setValue(percentage);
    }
  }

  public setValue(value: number) : void {
    this.percentage.base = value;
    this.percentage.difficult = Math.floor(value / 2);
    this.percentage.hard = Math.floor(value / 5);
  }
}