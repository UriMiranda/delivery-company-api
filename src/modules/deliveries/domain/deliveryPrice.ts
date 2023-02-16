import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";

interface DeliveryPriceProps {
  value: number;
}

export class DeliveryPrice extends ValueObject<DeliveryPriceProps> {

  get value(): number {
    return this.props.value;
  }


  private constructor(props: DeliveryPriceProps) {
    super(props);
  }

  public static create(price: number): Result<DeliveryPrice> {
    return Result.ok<DeliveryPrice>(new DeliveryPrice({
      value: price
    }));
  }
}
