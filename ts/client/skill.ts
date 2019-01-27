/// <reference path="../stats.ts">
import StatAttributes = Stats.StatAttributes;

import {Helpers} from "../helpers";

export class Skill {
  name: string;
  values: StatAttributes;
  constructor(name: string, values?: StatAttributes | number) {
    this.name = name;
    if (typeof(values) === "object") {
      this.values = values;
    } else {
      this.setValue(values);
    }
  }

  public setValue(value: number) : void {
    this.values.base = value;
    this.values.difficult = Math.floor(value / 2);
    this.values.hard = Math.floor(value / 5);
  }
}