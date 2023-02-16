import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { Delivery, DeliveryProps, DeliveryType } from "../../../../modules/deliveries/domain/delivery";
import { DeliveryIntinerary } from "../../../../modules/deliveries/domain/deliveryIntinerary";
import { DeliveryId } from "../../../../modules/deliveries/domain/deliveryId";
import { EmployeeId } from "../../../../modules/deliveries/domain/employeeId";

describe("Delivery Entity", () => {
  let deliveryIntinerary: DeliveryIntinerary | null;

  beforeEach(() => {
    deliveryIntinerary = null;
  });

  it("should create delivery", () => {
    deliveryIntinerary = DeliveryIntinerary.create({
      origin: "03163030",
      destiny: "08162300",
    }).getValue();
    const result = Delivery.create(
      {
        deliveryId: DeliveryId.create().getValue(),
        employeeId: EmployeeId.create().getValue(),
        type: DeliveryType.pickup,
        intinerary: deliveryIntinerary,
      },
      new UniqueEntityID(1)
    );
    expect(result.isSuccess).toBeTruthy();
  });
});
