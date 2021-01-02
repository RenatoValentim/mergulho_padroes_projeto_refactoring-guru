import { log } from '../../utils/log';
import { FlyingTransport } from './interfaces/flying-transport';
import { Passenger } from './interfaces/passenger';
import { FLYING_TRANSPORT_TYPE } from '../../utils/flying-transport-type';

export class Helicopter implements FlyingTransport {
  readonly type: FLYING_TRANSPORT_TYPE;

  constructor() {
    this.type = FLYING_TRANSPORT_TYPE.HELICOPTER;
  }

  fly(origin: string, destination: string, passengers: Passenger) {
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
