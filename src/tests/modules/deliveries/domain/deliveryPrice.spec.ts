import { DeliveryType } from "../../../../modules/deliveries/domain/delivery";
import { DeliveryPrice } from "../../../../modules/deliveries/domain/deliveryPrice";

describe("Delivery Price", () => {
  describe("Create price ", () => {
    it("should create price corectly", () => {
      const priceOrError = DeliveryPrice.create(12.98);
      if(priceOrError.isSuccess) {
        const price = priceOrError.getValue();
        expect(price.value).toBe(12.98)
      }
      expect(priceOrError.isSuccess).toBeTruthy();
    });
  });
});
