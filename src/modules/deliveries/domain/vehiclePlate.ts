import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface VehiclePlateProps {
  value: string;
}

export class VehiclePlate extends ValueObject<VehiclePlateProps> {
  get value() {
    return this.props.value;
  }

  private constructor(props: VehiclePlateProps) {
    super(props);
  }

  private static validatePlate(plate: string): boolean {
    return /^[a-zA-Z]{3}\d{4}$/.test(plate);
  }

  public static create(plate: string): Result<VehiclePlate> {
    if (!this.validatePlate(plate)) {
      return Result.fail<VehiclePlate>("Placa inválida");
    }
    return Result.ok<VehiclePlate>(new VehiclePlate({ value: plate }));
  }
}
