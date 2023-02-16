import { Result } from "../../../../shared/core/Result";
import { AggregateRoot } from "../../../../shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { Staff } from "../staff";
import { AssetRegistrationNumber } from "./assetRegistrationNumber";

export interface AssetProps {
  registrationNumber: AssetRegistrationNumber;
  staff?: Staff;
}

export class Asset extends AggregateRoot<AssetProps> {
  get registrationNumber(): AssetRegistrationNumber {
    return this.props.registrationNumber;
  }

  get staff(): Staff | undefined {
    return this.props.staff;
  }

  private constructor(props: AssetProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: AssetProps, id?: UniqueEntityID): Result<Asset> {
    return Result.ok<Asset>(new Asset(props, id));
  }
}
