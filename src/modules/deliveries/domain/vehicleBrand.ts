import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface VehicleBrandProps {
  value: string;
}

export class VehicleBrand extends ValueObject<VehicleBrandProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: VehicleBrandProps) {
    super(props);
  }

  public static create(brand: string): Result<VehicleBrand> {
    return Result.ok<VehicleBrand>(new VehicleBrand({ value: brand }));
  }
}
