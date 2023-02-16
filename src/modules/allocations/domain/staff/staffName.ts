import { Result } from "../../../../shared/core/Result";
import { ValueObject } from "../../../../shared/domain/ValueObject";

interface StaffNameProps {
  value: string;
}

export class StaffName extends ValueObject<StaffNameProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: StaffNameProps) {
    super(props);
  }

  public static create(name: string): Result<StaffName> {
    return Result.ok<StaffName>(new StaffName({ value: name }));
  }
}
