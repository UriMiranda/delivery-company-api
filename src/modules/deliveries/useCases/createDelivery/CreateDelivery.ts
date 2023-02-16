import { AppError } from "../../../../shared/core/AppError";
import { left, Result, right } from "../../../../shared/core/Result";
import { UseCase } from "../../../../shared/core/UseCase";
import { Delivery } from "../../domain/delivery";
import { DeliveryId } from "../../domain/deliveryId";
import { DeliveryIntinerary } from "../../domain/deliveryIntinerary";
import { Location } from "../../domain/location";
import { DeliveryService } from "../../domain/services/deliveryService";
import { IDeliveryRepo } from "../../repos/deliveryRepo";
import { IEmployeeRepo } from "../../repos/employeeRepo";
import { CreateDeliveryRequestDto } from "./CreateDeliveryRequestDto";
import { CreateDeliveryResponse } from "./CreateDeliveryResponse";

export class CreateDelivery implements UseCase<CreateDeliveryRequestDto, CreateDeliveryResponse> {
  constructor(private readonly deliveryService: DeliveryService, private readonly employeeRepo: IEmployeeRepo, private readonly deliveryRepo: IDeliveryRepo) {}

  async execute(request: CreateDeliveryRequestDto): Promise<CreateDeliveryResponse> {
    const intineraryOrError = DeliveryIntinerary.create({
      origin: request.origin,
      destiny: request.destiny,
    });
    if (intineraryOrError.isFailure) {
      return left(intineraryOrError) as CreateDeliveryResponse;
    }
    const intinerary = intineraryOrError.getValue();
    const origin = intinerary.getOriginLocation();
    const deliveryOrError = Delivery.create({
      deliveryId: DeliveryId.create().getValue(),
      intinerary: intineraryOrError.getValue(),
      location: Location.create({
        latitude: origin.latitude,
        longitude: origin.longitude,
        lastUpdateAt: new Date(),
      }).getValue(),
      type: request.type,
    });
    if (deliveryOrError.isFailure) {
      return left(deliveryOrError) as CreateDeliveryResponse;
    }
    const delivery = deliveryOrError.getValue();
    const employee = await this.employeeRepo.findClosest(delivery.location);
    if (employee === null) {
      return left(Result.fail<AppError.UnexpectedError>("Nenhum funcionário encontrado perto da origem"));
    }

    const calculatePriceResult = this.deliveryService.calculatePrice(delivery, employee);

    if (calculatePriceResult.isFailure) {
      return left(calculatePriceResult) as CreateDeliveryResponse;
    }

    this.deliveryRepo.save(delivery);

    return right(Result.ok<void>()) as CreateDeliveryResponse;
  }
}
