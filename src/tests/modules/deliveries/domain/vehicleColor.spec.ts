import { VehicleColor } from "../../../../modules/deliveries/domain/vehicleColor";

describe("Vehicle Color", () => {
  it("create vehicle color", () => {
    const colorOrError = VehicleColor.create("Azul");
    const color = colorOrError.getValue();
    expect(color.value).toBe("Azul");
    expect(colorOrError.isSuccess).toBeTruthy();
  });
});
