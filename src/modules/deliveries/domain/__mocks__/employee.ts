import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { UserDocumentId } from "../../../users/domain/userDocumetId";
import { UserEmail } from "../../../users/domain/userEmail";
import { UserName } from "../../../users/domain/userName";
import { Location } from "../location";
import { EmployeeRevenuePercentage } from "../employeeRevenuePercentage";
import { VehicleBrand } from "../vehicleBrand";
import { VehicleColor } from "../vehicleColor";
import { VehicleDetails } from "../vehicleDetails";
import { VehicleId } from "../vehicleId";
import { VehicleName } from "../vehicleName";
import { VehiclePlate } from "../vehiclePlate";
import { VehicleYear } from "../vehicleYear";

function EmployeeMock() {}
EmployeeMock.create = jest.fn().mockReturnValue({
  name: UserName.create("Test").getValue(),
  email: UserEmail.create("test@test.com").getValue(),
  documentId: UserDocumentId.create("44014004023").getValue(),
  vehicleDetails: VehicleDetails.create({
    vehicleId: VehicleId.create(new UniqueEntityID(1)).getValue(),
    plate: VehiclePlate.create("ELC7446").getValue(),
    name: VehicleName.create("Palio").getValue(),
    brand: VehicleBrand.create("Fiat").getValue(),
    color: VehicleColor.create("Azul").getValue(),
    year: VehicleYear.create(2019).getValue(),
    location: Location.create({
      latitude: "23.5558",
      longitude: "46.6396",
    }).getValue(),
  }).getValue(),
  revenuePercentage: EmployeeRevenuePercentage.create(10.0).getValue(),
});

export default EmployeeMock;
