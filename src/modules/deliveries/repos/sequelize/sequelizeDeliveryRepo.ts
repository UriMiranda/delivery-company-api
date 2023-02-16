import { Delivery } from "../../domain/delivery";
import { DeliveryId } from "../../domain/deliveryId";
import { Location } from "../../domain/location";
import { IDeliveryRepo } from "../deliveryRepo";

export class SequelizeDeliveryRepo implements IDeliveryRepo {
  find(id?: DeliveryId | undefined): Promise<Delivery> | null {
    throw new Error("Method not implemented.");
  }
  setAsDeliveried(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  updateLocation(location: Location): Promise<void> {
    throw new Error("Method not implemented.");
  }
  save(delivery: Delivery): void | Promise<void> {
    throw new Error("Method not implemented.");
  }
}
