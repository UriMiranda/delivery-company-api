import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface VehicleColorProps {
  value: string;
}

export class VehicleColor extends ValueObject<VehicleColorProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: VehicleColorProps) {
    super(props);
  }

  public static create(color: string): Result<VehicleColor> {
    return Result.ok<VehicleColor>(new VehicleColor({ value: color }));
  }
}
