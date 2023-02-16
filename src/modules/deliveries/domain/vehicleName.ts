import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface VehicleNameProps {
  value: string;
}

export class VehicleName extends ValueObject<VehicleNameProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: VehicleNameProps) {
    super(props);
  }

  public static create(name: string): Result<VehicleName> {
    return Result.ok<VehicleName>(
      new VehicleName({
        value: name,
      })
    );
  }
}
