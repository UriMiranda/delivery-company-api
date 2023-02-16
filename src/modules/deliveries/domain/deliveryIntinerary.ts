import { Result } from "../../../shared/core/Result";
import { ValueObject } from "../../../shared/domain/ValueObject";
import { Location } from "./location";

interface DeliveryIntineraryProps {
  origin: string;
  destiny: string;
}

export class DeliveryIntinerary extends ValueObject<DeliveryIntineraryProps> {
  get origin() {
    return this.props.origin;
  }

  get destiny() {
    return this.props.destiny;
  }

  private constructor(props: DeliveryIntineraryProps) {
    super(props);
  }

  public getOriginLocation(): Location {
    return {
      latitude: "23.5558",
      longitude: "46.6396",
    };
  }

  private static isValidPostalcode(postalCode: string): boolean {
    if (postalCode === null || postalCode === undefined) return false;
    if (postalCode.length !== 8) return false;
    return true;
  }

  public static create(props: DeliveryIntineraryProps): Result<DeliveryIntinerary> {
    if (!this.isValidPostalcode(props.destiny) || !this.isValidPostalcode(props.origin)) {
      return Result.fail<DeliveryIntinerary>("Ceps inválidos");
    }

    return Result.ok<DeliveryIntinerary>(new DeliveryIntinerary(props));
  }
}
