import { VehicleYear } from "../../../../modules/deliveries/domain/vehicleYear";

describe("Vehicle Year", () => {
  it("should create vehicle valid year", () => {
    const yearOrError = VehicleYear.create(2019);
    const year = yearOrError.getValue();
    expect(year.value).toBe(2019);
    expect(yearOrError.isSuccess).toBeTruthy();
  });

  it("should fail to create with invalid year", () => {
    const yearOrError = VehicleYear.create(2008);
    expect(yearOrError.isFailure).toBeTruthy();
  });
});
