import { Vehicle } from "../../../../modules/deliveries/domain/vehicle";
import { VehicleBrand } from "../../../../modules/deliveries/domain/vehicleBrand";
import { VehicleName } from "../../../../modules/deliveries/domain/vehicleName";
import { VehiclePlate } from "../../../../modules/deliveries/domain/vehiclePlate";
import { VehicleYear } from "../../../../modules/deliveries/domain/vehicleYear";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";

describe("Veichle enttiy", () => {
  describe("create antity", () => {
    it("should create correctly", () => {
      const vehicleOrError = Vehicle.create(
        {
          name: VehicleName.create("Palio").getValue(),
          brand: VehicleBrand.create("Fiat").getValue(),
          year: VehicleYear.create(2019).getValue(),
          plate: VehiclePlate.create("ELC7446").getValue(),
        },
        new UniqueEntityID(1)
      );

      expect(vehicleOrError.isSuccess).toBeTruthy();
    });
  });
});
