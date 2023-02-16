import { Delivery, DeliveryType } from "../../domain/delivery";
import { DeliveryId } from "../../domain/deliveryId";
import { DeliveryIntinerary } from "../../domain/deliveryIntinerary";
import { Location } from "../../domain/location";

export const mockSave = jest.fn();
export const mockFind = jest.fn().mockReturnValue(
  Delivery.create({
    intinerary: DeliveryIntinerary.create({ origin: "08031030", destiny: "03189223" }).getValue(),
    location: Location.create({ latitude: "-38.49238492", longitude: "48.49238492", lastUpdateAt: new Date() }).getValue(),
    deliveryId: DeliveryId.create().getValue(),
    type: DeliveryType.express,
  }).getValue()
);

const mock = jest.fn().mockImplementation(() => ({
  save: mockSave,
  find: mockFind,
}));

export default mock;
