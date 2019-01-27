import {Character} from "./character";

export class Human extends Character {
  constructor(title: string, firstName: string, lastName: string, gender: string) {
    super(title, firstName, lastName, gender);
  }

  generateHP() : number {
    const hp: number = this.con.base + this.siz.base;
    console.log(hp /10);
    return Math.floor(hp / 10);
  }

  // generate a movement number based on a human character's stats
  generateMovement() : number {
    const movNine: boolean = this.str.base > this.siz.base && this.dex.base > this.siz.base;
    const movEight: boolean = this.str.base > this.siz.base || this.dex.base > this.siz.base;
    const movSeven: boolean = this.str.base < this.siz.base || this.dex.base < this.siz.base;
    if (movSeven) {
      return 7;
    } else if (movEight && !movNine) {
      return 8;
    } else {
      return 9;
    }
  }

  generateDmgBns() : number {
    return super.generateDmgBns();
  }


  generateBuild() : number {
    return super.generateBuild();
  }

  generateAge() : number {
    return super.generateAge();
  }

  rollCheck(stat: string, rollType: string) : boolean {
    return super.rollCheck(stat, rollType);
  }

  toJSON() : object {
    return super.toJSON();
  }
}