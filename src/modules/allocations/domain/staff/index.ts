import { Result } from "../../../../shared/core/Result";
import { AggregateRoot } from "../../../../shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { StaffDriverLicense } from "./staffDriverLicense";
import { StaffId } from "./staffId";
import { StaffName } from "./staffName";

export interface StaffProps {
  name: StaffName;
  driverLicense: StaffDriverLicense;
}

export class Staff extends AggregateRoot<StaffProps> {
  get staffId(): UniqueEntityID {
    return StaffId.create(this._id).getValue().id;
  }

  get name(): StaffName {
    return this.props.name;
  }

  get driverLicense(): StaffDriverLicense {
    return this.props.driverLicense;
  }

  private constructor(props: StaffProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: StaffProps, id?: UniqueEntityID): Result<Staff> {
    return Result.ok<Staff>(new Staff(props, id));
  }
}
