import { VehicleBrand } from "../../../../modules/deliveries/domain/vehicleBrand";
import { VehicleColor } from "../../../../modules/deliveries/domain/vehicleColor";
import { VehicleDetails } from "../../../../modules/deliveries/domain/vehicleDetails";
import { VehicleId } from "../../../../modules/deliveries/domain/vehicleId";
import { Location } from "../../../../modules/deliveries/domain/location";
import { VehicleName } from "../../../../modules/deliveries/domain/vehicleName";
import { VehiclePlate } from "../../../../modules/deliveries/domain/vehiclePlate";
import { VehicleYear } from "../../../../modules/deliveries/domain/vehicleYear";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";

describe("Vehicle details", () => {
  it("create vehicle details", () => {
    const detailsOrError = VehicleDetails.create({
      vehicleId: VehicleId.create(new UniqueEntityID(1)).getValue(),
      name: VehicleName.create("Palio").getValue(),
      brand: VehicleBrand.create("Fiat").getValue(),
      plate: VehiclePlate.create("ELC7446").getValue(),
      year: VehicleYear.create(2019).getValue(),
      color: VehicleColor.create("Azul").getValue(),
      location: Location.create({
        latitude: "23.5558",
        longitude: "46.6396",
        lastUpdateAt: new Date()
      }).getValue(),
    });
    const details = detailsOrError.getValue()
    expect(details.name.value).toBe("Palio");
    expect(details.brand.value).toBe("Fiat");
    expect(details.plate.value).toBe("ELC7446");
    expect(details.year.value).toBe(2019);
    expect(details.color.value).toBe("Azul");
    expect(detailsOrError.isSuccess).toBeTruthy();
  });
});
