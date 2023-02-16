import { Result } from "../../../shared/core/Result";
import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { Entity } from "../../../shared/domain/Entity";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { VehicleBrand } from "./vehicleBrand";
import { VehicleId } from "./vehicleId";
import { VehicleName } from "./vehicleName";
import { VehiclePlate } from "./vehiclePlate";
import { VehicleYear } from "./vehicleYear";

export interface VehicleProps {
  name: VehicleName;
  brand: VehicleBrand;
  year: VehicleYear;
  plate: VehiclePlate;
}

export class Vehicle extends AggregateRoot<VehicleProps> {
  get vehicleId(): VehicleId {
    return VehicleId.create(this._id).getValue();
  }

  get name(): VehicleName {
    return this.props.name;
  }

  get brand(): VehicleBrand {
    return this.props.brand;
  }

  get year(): VehicleYear {
    return this.props.year;
  }

  get plate(): VehiclePlate {
    return this.props.plate;
  }

  private constructor(props: VehicleProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: VehicleProps, id?: UniqueEntityID): Result<Vehicle> {
    return Result.ok<Vehicle>(new Vehicle(props, id));
  }
}
