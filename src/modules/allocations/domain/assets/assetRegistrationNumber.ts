import { Result } from "../../../../shared/core/Result";
import { ValueObject } from "../../../../shared/domain/ValueObject";

interface AssetRegistrationNumberProps {
  value: string;
}

export class AssetRegistrationNumber extends ValueObject<AssetRegistrationNumberProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: AssetRegistrationNumberProps) {
    super(props);
  }

  public static create(registrationNumber: string): Result<AssetRegistrationNumber> {
    return Result.ok<AssetRegistrationNumber>(new AssetRegistrationNumber({ value: registrationNumber }));
  }
}
