import { Delivery } from "../domain/delivery";
import { Employee } from "../domain/employee";
import { Location } from "../domain/location";
import { Vehicle } from "../domain/vehicle";

export interface IEmployeeRepo {
  create(employee: Employee): void | Promise<void>;
  assignVehicle(vehicle: Vehicle): void | Promise<void>;
  findClosest(location: Location): Promise<Employee | null>;
}
