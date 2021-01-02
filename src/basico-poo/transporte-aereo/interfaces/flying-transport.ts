import { Passenger } from './passenger';
import { FLYING_TRANSPORT_TYPE } from '../../../utils/flying-transport-type';

export interface FlyingTransport {
  readonly type: FLYING_TRANSPORT_TYPE;
  fly: (origin: string, destination: string, passengers: Passenger) => void;
}