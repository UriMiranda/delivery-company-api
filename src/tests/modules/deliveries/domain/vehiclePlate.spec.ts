import { VehiclePlate } from "../../../../modules/deliveries/domain/vehiclePlate";

describe("Veichle entity", () => {
  const plate = "ELC7446";
  const wrongPlate = "ELC74469";

  describe("create entity", () => {
    it("should create correctly", () => {
      const vehicleOrError = VehiclePlate.create(plate);
      expect(vehicleOrError.getValue().value).toBe(plate);
      expect(vehicleOrError.isSuccess).toBeTruthy();
    });

    it("should fail with invalid plate", () => {
      const vehicleOrError = VehiclePlate.create(wrongPlate);
      expect(vehicleOrError.isFailure).toBeTruthy();
    });
  });
});
