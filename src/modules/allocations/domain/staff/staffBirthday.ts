import { Result } from "../../../../shared/core/Result";
import { ValueObject } from "../../../../shared/domain/ValueObject";

interface StaffBirthdayProps {
  value: Date;
}

export class StaffBirthday extends ValueObject<StaffBirthdayProps> {
  private static minAge = 18;

  get value(): Date {
    return this.props.value;
  }

  private constructor(props: StaffBirthdayProps) {
    super(props);
  }

  public getAge(): number {
    return new Date().getFullYear() - this.value.getFullYear();
  }

  private static validateAge(birthday: Date): boolean {
    const age = new Date().getFullYear() - birthday.getFullYear();
    return this.minAge < age;
  }

  public static create(birthday: Date): Result<StaffBirthday> {
    if (!this.validateAge(birthday)) {
      return Result.fail<StaffBirthday>("Staff is under age");
    }
    return Result.ok<StaffBirthday>(new StaffBirthday({ value: birthday }));
  }
}
