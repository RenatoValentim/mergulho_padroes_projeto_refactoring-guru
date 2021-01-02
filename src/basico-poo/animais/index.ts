import { log } from '../../utils/log';
import { SEX } from '../../utils/sex';
import { Cat } from './cat';
import { Dog } from './dog';

const tom = new Cat('Tom', SEX.M, 1, 4, 'preto');
const nina = new Cat('Nina', SEX.F, 0.5, 3, 'preto e branco');

const pluto = new Dog('Pluto', SEX.M, 3, 12, 'Amarelo');

log(
  tom,
  nina,
  pluto,
);
