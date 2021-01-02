import { log } from '../../utils/log';
import { FlyingTransport } from './interfaces/flying-transport';

export class Airport {
  acceptVehicle(vehicle: FlyingTransport) {
    log(`vehicle ${vehicle.type} accepted`);
  }
}