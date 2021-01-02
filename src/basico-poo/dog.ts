import { log } from '../utils/log';
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

  bark(): void {
    log('BARK! BARK!...');
  }
}