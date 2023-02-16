import { DeliveryIntinerary } from "../../../../modules/deliveries/domain/deliveryIntinerary";

describe("Delivery Itinerary", () => {
  describe("create delivery itinerary value", () => {
    it("should create correctly a intinerary", () => {
      const intineraryOrError = DeliveryIntinerary.create({
        origin: "03163030",
        destiny: "08162300",
      });
      if (intineraryOrError.isSuccess) {
        const intinerary = intineraryOrError.getValue();
        expect(intinerary.origin).toBe("03163030");
        expect(intinerary.destiny).toBe("08162300");
      }
      expect(intineraryOrError.isSuccess).toBeTruthy();
    });

    it("should return a postal code error", () => {
      const intineraryOrError = DeliveryIntinerary.create({
        origin: "03163030saq",
        destiny: "08162300",
      });
      expect(intineraryOrError.isFailure).toBeTruthy();
    });
  });
});
