import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { UserDocumentId } from "../../../users/domain/userDocumetId";
import { UserEmail } from "../../../users/domain/userEmail";
import { UserName } from "../../../users/domain/userName";
import { Employee } from "../../domain/employee";
import { Location } from "../../domain/location";
import { EmployeeRevenuePercentage } from "../../domain/employeeRevenuePercentage";
import { VehicleDetails } from "../../domain/vehicleDetails";
import { VehicleId } from "../../domain/vehicleId";
import { VehiclePlate } from "../../domain/vehiclePlate";
import { VehicleName } from "../../domain/vehicleName";
import { VehicleBrand } from "../../domain/vehicleBrand";
import { VehicleColor } from "../../domain/vehicleColor";
import { VehicleYear } from "../../domain/vehicleYear";
import { EmployeeId } from "../../domain/employeeId";

export const mockFindClosest = jest.fn().mockImplementation(() =>
  Employee.create(
    {
      name: UserName.create("Test").getValue(),
      email: UserEmail.create("test@test.com").getValue(),
      documentId: UserDocumentId.create("44014004023").getValue(),
      vehicleDetails: VehicleDetails.create({
        vehicleId: VehicleId.create(new UniqueEntityID(1)).getValue(),
        name: VehicleName.create("Palio").getValue(),
        brand: VehicleBrand.create("Fiat").getValue(),
        plate: VehiclePlate.create("ELC7446").getValue(),
        year: VehicleYear.create(2019).getValue(),
        color: VehicleColor.create("Azul").getValue(),
        location: Location.create({
          latitude: "23.5558",
          longitude: "46.6396",
        }).getValue(),
      }).getValue(),
      revenuePercentage: EmployeeRevenuePercentage.create(10.0).getValue(),
      employeeId: EmployeeId.create().getValue(),
    },
    new UniqueEntityID(1)
  ).getValue()
);

const mock = jest.fn().mockImplementation(() => ({
  findClosest: mockFindClosest,
}));

export default mock;
