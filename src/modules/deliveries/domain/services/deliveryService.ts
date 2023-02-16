import { Result } from "../../../../shared/core/Result";
import { Delivery, DeliveryType } from "../delivery";
import { DeliveryPrice } from "../deliveryPrice";
import { Employee } from "../employee";

export class DeliveryService {
  public calculatePrice(delivery: Delivery, employee: Employee): Result<number> {
    let price;
    const issTax = 2.0;
    const revenuePercent = 1.05;
    switch (delivery.type) {
      case DeliveryType.express:
        price = 40.0;
        break;
      case DeliveryType.fast:
        price = 50.0;
        break;
      case DeliveryType.pickup:
        price = 0.0;
        break;
    }
    if (price > 0) {
      price += issTax;
      price *= revenuePercent;
    }
    price *= employee.revenuePercentage.value / 100;
    delivery.props.price = DeliveryPrice.create(price).getValue();
    return Result.ok<number>(price);
  }
}
