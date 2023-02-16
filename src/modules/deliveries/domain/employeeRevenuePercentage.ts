import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface EmployeeRevenuePercentageProps {
  value: number;
}

export class EmployeeRevenuePercentage extends ValueObject<EmployeeRevenuePercentageProps> {
  get value(): number {
    return this.props.value;
  }

  private constructor(props: EmployeeRevenuePercentageProps) {
    super(props);
  }

  private static validatePercentage(value: number): boolean {
    if (value >= 30) return false;
    return true;
  }

  public static create(value: number): Result<EmployeeRevenuePercentage> {
    if (!this.validatePercentage(value)) {
      return Result.fail<EmployeeRevenuePercentage>("Porcentagem muito alta impossivel de lucrar");
    }
    return Result.ok<EmployeeRevenuePercentage>(
      new EmployeeRevenuePercentage({
        value,
      })
    );
  }
}
