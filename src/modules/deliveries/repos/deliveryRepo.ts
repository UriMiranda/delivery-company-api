import { Delivery } from "../domain/delivery";
import { DeliveryId } from "../domain/deliveryId";
import { Location } from "../domain/location";

export interface IDeliveryRepo {
  find(id?: DeliveryId): Promise<Delivery> | null;
  setAsDeliveried(): Promise<void>;
  updateLocation(location: Location): Promise<void>;
  save(delivery: Delivery): Promise<void> | void;
}
