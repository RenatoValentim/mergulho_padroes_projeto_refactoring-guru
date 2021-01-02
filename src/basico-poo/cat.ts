import { Animal } from './animal';
import { SEX } from '../utils/sex';

export class Cat extends Animal {
  constructor(
    public name: string,
    public sex: SEX,
    public age: number,
    public weight: number,
    public color: string,
  ) {
    super(
      name,
      sex,
      age,
      weight,
      color,
    );
  }

  meow() {}
}