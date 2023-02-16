import { VehicleName } from "../../../../modules/deliveries/domain/vehicleName";

describe("Vehicle Name", () => {
  it("should create vehicle name", () => {
    const nameOrError = VehicleName.create("Palio");
    expect(nameOrError.isSuccess).toBeTruthy();
  });
});
