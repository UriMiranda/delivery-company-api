import { Result } from "../../../shared/core/Result";
import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { UserDocumentId } from "../../users/domain/userDocumetId";
import { UserEmail } from "../../users/domain/userEmail";
import { UserName } from "../../users/domain/userName";
import { EmployeeId } from "./employeeId";
import { EmployeeRevenuePercentage } from "./employeeRevenuePercentage";
import { Location } from "./location";
import { VehicleDetails } from "./vehicleDetails";

export interface EmployeeProps {
  employeeId: EmployeeId;
  name: UserName;
  email: UserEmail;
  documentId: UserDocumentId;
  vehicleDetails: VehicleDetails;
  revenuePercentage: EmployeeRevenuePercentage;
}

export class Employee extends AggregateRoot<EmployeeProps> {
  get employeeId(): EmployeeId {
    return EmployeeId.create(this._id).getValue();
  }

  get name(): UserName {
    return this.props.name;
  }

  get email(): UserEmail {
    return this.props.email;
  }

  get documentId(): UserDocumentId {
    return this.props.documentId;
  }

  get vehicleDetails(): VehicleDetails {
    return this.props.vehicleDetails;
  }

  get revenuePercentage(): EmployeeRevenuePercentage {
    return this.props.revenuePercentage;
  }

  private constructor(props: EmployeeProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: EmployeeProps, id?: UniqueEntityID): Result<Employee> {
    return Result.ok<Employee>(new Employee(props, id));
  }
}
