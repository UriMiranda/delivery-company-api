import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";
import { Location } from "./location";
import { VehicleBrand } from "./vehicleBrand";
import { VehicleColor } from "./vehicleColor";
import { VehicleId } from "./vehicleId";
import { VehicleName } from "./vehicleName";
import { VehiclePlate } from "./vehiclePlate";
import { VehicleYear } from "./vehicleYear";

export interface VehicleDetailsProps {
  vehicleId: VehicleId;
  plate: VehiclePlate;
  name: VehicleName;
  brand: VehicleBrand;
  year: VehicleYear;
  color: VehicleColor;
  location: Location
}

export class VehicleDetails extends ValueObject<VehicleDetailsProps> {
  get vehicleId(): VehicleId {
    return this.props.vehicleId;
  }

  get plate(): VehiclePlate {
    return this.props.plate;
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

  get color(): VehicleColor {
    return this.props.color;
  }

  get location(): Location {
    return this.props.location;
  }

  private constructor(props: VehicleDetailsProps) {
    super(props);
  }

  public static create(props: VehicleDetailsProps): Result<VehicleDetails> {
    return Result.ok<VehicleDetails>(new VehicleDetails(props));
  }
}
