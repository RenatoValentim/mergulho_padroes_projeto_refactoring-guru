import { log } from '../utils/log';
import { SEX } from '../utils/sex';
import { Cat } from './animais/cat';
import { Dog } from './animais/dog';
import { Passenger } from './transporte-aereo/interfaces/passenger';
import { Helicopter } from './transporte-aereo/helicopter';
import { Airplane } from './transporte-aereo/airplane';
import { Airport } from './transporte-aereo/airport';
import { Professor } from './relacoes-objetos/dependencia/professor';
import { Curso } from './relacoes-objetos/dependencia/curso';

const tom = new Cat('Tom', SEX.M, 1, 4, 'preto');
const nina = new Cat('Nina', SEX.F, 0.5, 3, 'preto e branco');
const pluto = new Dog('Pluto', SEX.M, 3, 12, 'Amarelo');

const passenger1: Passenger = {
  name: 'Passenger1 Name',
  sex: SEX.M,
  weight: 73,
  flightTicket: 1
}

const passenger2: Passenger = {
  name: 'Passenger2 Name',
  sex: SEX.M,
  weight: 73,
  flightTicket: 1
}

const airplane = new Airplane();
const helicopter = new Helicopter();
const airport = new Airport();

const professor = new Professor('Programação')

log(professor.getCurso);
