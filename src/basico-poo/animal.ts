import { log } from '../utils/log';

export class Animal {
  private name: string;
  private sex: string;
  private age: number;
  private weight: number;
  private color: string;

  constructor(
    name: string,
    sex: string,
    age: number,
    weight: number,
    color: string,
  ) {
    this.setName = name;
    this.setSex = sex;
    this.setAge = age;
    this.setWeight = weight;
    this.setColor = color;
  }

  get getName(): string {
    return this.name;
  }

  get getSex(): string {
    return this.sex;
  }

  get getAge(): number {
    return this.age;
  }

  get getWeight(): number {
    return this.weight;
  }

  get getColor(): string {
    return this.color;
  }

  private set setName(name: string) {
    this.name = name;
  }

  private set setSex(sex: string) {
    this.sex = sex;
  }

  private set setAge(age: number) {
    this.age = age
  }

  private set setWeight(weight: number) {
    this.weight = weight
  }

  private set setColor(color: string) {
    this.color = color
  }

  breather(): void {
    log('Breathing...');
  }

  eat(food: string): void {
    log(`Eating ${food}...`);
  }

  run(destination: string): void {
    log(`Running to ${destination}...`);
  }

  sleep(hours: number): void {
    log(`Sleeping up to ${hours} hours...`);
  }
}