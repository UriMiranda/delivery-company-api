import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface IUserName {
  value: string;
}

export class UserName extends ValueObject<IUserName> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: IUserName) {
    super(props);
  }

  private static isValidName(name: string): boolean {
    return name.length > 2;
  }

  public static create(name: string): Result<UserName> {
    if (!this.isValidName(name)) {
      return Result.fail<UserName>("Nome inválido");
    }
    return Result.ok<UserName>(new UserName({ value: name }));
  }
}
