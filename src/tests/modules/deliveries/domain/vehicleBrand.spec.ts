import { VehicleBrand } from "../../../../modules/deliveries/domain/vehicleBrand";

describe("Vehicle Brand", () => {
  it("create vehicle brand", () => {
    const brandOrError = VehicleBrand.create("Fiat");
    const brand = brandOrError.getValue();
    
    expect(brand.value).toBe("Fiat");
    expect(brandOrError.isSuccess).toBeTruthy();
  });
});
