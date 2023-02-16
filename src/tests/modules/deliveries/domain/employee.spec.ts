import { Employee } from "../../../../modules/deliveries/domain/employee";
import { EmployeeRevenuePercentage } from "../../../../modules/deliveries/domain/employeeRevenuePercentage";
import { VehicleBrand } from "../../../../modules/deliveries/domain/vehicleBrand";
import { VehicleColor } from "../../../../modules/deliveries/domain/vehicleColor";
import { VehicleDetails } from "../../../../modules/deliveries/domain/vehicleDetails";
import { VehicleId } from "../../../../modules/deliveries/domain/vehicleId";
import { VehicleName } from "../../../../modules/deliveries/domain/vehicleName";
import { VehiclePlate } from "../../../../modules/deliveries/domain/vehiclePlate";
import { VehicleYear } from "../../../../modules/deliveries/domain/vehicleYear";
import { UserDocumentId } from "../../../../modules/users/domain/userDocumetId";
import { UserEmail } from "../../../../modules/users/domain/userEmail";
import { UserName } from "../../../../modules/users/domain/userName";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { Location } from "../../../../modules/deliveries/domain/location";
import { EmployeeId } from "../../../../modules/deliveries/domain/employeeId";

describe("Employee Entity", () => {
  describe("create entity", () => {
    it("should create correctly", () => {
      const employeeOrError = Employee.create(
        {
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
          employeeId: EmployeeId.create().getValue()
        },
        new UniqueEntityID(1)
      );

      if (employeeOrError.isSuccess) {
        const employee = employeeOrError.getValue();
        expect(employee.name.value).toBe("Test");
        expect(employee.email.value).toBe("test@test.com");
        expect(employee.documentId.value).toBe("44014004023");
        expect(employee.vehicleDetails).toBeInstanceOf(VehicleDetails);
        expect(employee.revenuePercentage.value).toBe(10.0);
      }

      expect(employeeOrError.isSuccess).toBeTruthy();
    });
  });
});
