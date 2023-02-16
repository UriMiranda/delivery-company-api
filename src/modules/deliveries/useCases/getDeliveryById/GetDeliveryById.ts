import { AppError } from "../../../../shared/core/AppError";
import { Either, Result, left, right } from "../../../../shared/core/Result";
import { UseCase } from "../../../../shared/core/UseCase";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { Delivery } from "../../domain/delivery";
import { DeliveryId } from "../../domain/deliveryId";
import { IDeliveryRepo } from "../../repos/deliveryRepo";
import { GetDeliveryByIdErrors } from "./GetDeliveryByIdErrors";

interface GetDeliveryByIdRequestDto {
  deliveryId: number;
}

type Response = Either<AppError.UnexpectedError | GetDeliveryByIdErrors.DeliveryNotFound, Result<Delivery>>;

export class GetDeliveryById implements UseCase<GetDeliveryByIdRequestDto, Response> {
  public constructor(private readonly deliveryRepo: IDeliveryRepo) {}

  async execute(request: GetDeliveryByIdRequestDto): Promise<Response> {
    const delivery = await this.deliveryRepo.find(DeliveryId.create(new UniqueEntityID(request.deliveryId)).getValue());
    if (delivery == null) {
      return left(new GetDeliveryByIdErrors.DeliveryNotFound()) as Response;
    }
    return right(Result.ok<Delivery>(delivery)) as Response;
  }
}
