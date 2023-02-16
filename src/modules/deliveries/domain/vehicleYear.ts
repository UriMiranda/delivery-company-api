import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface VehicleYearProps {
  value: number;
}

export class VehicleYear extends ValueObject<VehicleYearProps> {
  get value(): number {
    return this.props.value;
  }

  private constructor(props: VehicleYearProps) {
    super(props);
  }

  private static validateYear(year: number): boolean {
    return year > 2009;
  }

  public static create(year: number): Result<VehicleYear> {
    if (!this.validateYear(year)) {
      return Result.fail<VehicleYear>("Seu carro está muito velho");
    }
    return Result.ok<VehicleYear>(
      new VehicleYear({
        value: year,
      })
    );
  }
}
