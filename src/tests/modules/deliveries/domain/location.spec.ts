import { Location } from "../../../../modules/deliveries/domain/location";

describe("Vehicle location", () => {
  it("should create correctly location", () => {
    const locationOrError = Location.create({
      latitude: "-38.49238492",
      longitude: "48.49238492",
      lastUpdateAt: new Date()
    });
    if (locationOrError.isSuccess) {
      const location = locationOrError.getValue();
      expect(location.latitude).toBe("-38.49238492");
      expect(location.longitude).toBe("48.49238492");
      expect(location.lastUpdateAt).toBeInstanceOf(Date);
    }
    expect(locationOrError.isSuccess);
  });
});
