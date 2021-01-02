import { SEX } from '../utils/sex';

export class Animal {
  constructor(
    public name: string,
    public sex: SEX,
    public age: number,
    public weight: number,
    public color: string,
  ) {}

  breather() {

  }

  eat(food: string) {

  }

  run(destination: string) {

  }

  sleep(hours: number) {

  }
}