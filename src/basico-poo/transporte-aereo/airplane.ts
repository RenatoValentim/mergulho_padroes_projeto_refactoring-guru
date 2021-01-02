import { FLYING_TRANSPORT_TYPE } from '../../utils/flying-transport-type';
import { log } from '../../utils/log';
import { FlyingTransport } from './interfaces/flying-transport';
import { Passenger } from './interfaces/passenger';

export class Airplane implements FlyingTransport {
  readonly type: FLYING_TRANSPORT_TYPE;
  
  constructor() {
    this.type = FLYING_TRANSPORT_TYPE.AIRPLANE;
  }
  
  fly(origin: string, destination: string, passengers: Passenger): void {
    log(`
      ${this.type} Flying...
      origin: ${origin};
      destination: ${destination};
      passengers:
        name: ${passengers.name};
        sex: ${passengers.sex};
        weight: ${passengers.weight};
        flightTicket: ${passengers.flightTicket};
    `);
  };
}