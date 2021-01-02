import { log } from '../utils/log';
import { SEX } from '../utils/sex';
import { Cat } from './cat';

const tom = new Cat('Tom', SEX.M, 1, 4, 'preto');
const nina = new Cat('Nina', SEX.F, 0.5, 3, 'preto e branco');

log(
  tom,
  nina,
);
