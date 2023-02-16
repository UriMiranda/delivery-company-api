import { VehicleId } from "../../../../modules/deliveries/domain/vehicleId";

describe("Vehicle Id", () => {
  it("create vehicle id", () => {
    const vehicleIdOrError = VehicleId.create();
    const vehicleId = vehicleIdOrError.getValue();

    expect(vehicleId.id).toBeDefined();
    expect(vehicleIdOrError.isSuccess).toBeTruthy();
  });
});
