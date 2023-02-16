import { DeliveryId } from "../../../../modules/deliveries/domain/deliveryId";

describe("Delivery Id", () => {
  it("should create correctly id", () => {
    const deliveryIdOrError = DeliveryId.create();
    const deliveryId = deliveryIdOrError.getValue();
    expect(deliveryIdOrError.isSuccess);
    expect(deliveryId.id).toBeDefined();
  });
});
