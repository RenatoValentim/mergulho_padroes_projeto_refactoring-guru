import { log } from '../../utils/log';
import { Animal } from './animal';

export class Dog extends Animal {
  constructor(
    name: string,
    sex: string,
    age: number,
    weight: number,
    color: string,
  ) {
    super(
      name,
      sex,
      age,
      weight,
      color,
    );
  }

  makeSound(): void {
    log('BARK! BARK!...');
  }
}