import { Result } from "../../../../shared/core/Result";
import { UseCaseError } from "../../../../shared/core/UseCaseError";

export namespace GetDeliveryByIdErrors {
  export class DeliveryNotFound extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: "Delivery is not found",
      } as UseCaseError);
    }
  }
}
