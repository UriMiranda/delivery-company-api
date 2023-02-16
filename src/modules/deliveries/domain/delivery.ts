import { Result } from "../../../shared/core/Result";
import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { DeliveryId } from "./deliveryId";
import { DeliveryIntinerary } from "./deliveryIntinerary";
import { DeliveryPrice } from "./deliveryPrice";
import { EmployeeId } from "./employeeId";
import { Location } from "./location";

export enum DeliveryType {
  express = "express",
  fast = "fast",
  pickup = "retirada",
}

export interface DeliveryProps {
  deliveryId: DeliveryId;
  employeeId?: EmployeeId;
  type: DeliveryType;
  intinerary: DeliveryIntinerary;
  price?: DeliveryPrice;
  location: Location;
}

export class Delivery extends AggregateRoot<DeliveryProps> {
  get deliveryId(): DeliveryId {
    return DeliveryId.create(this._id).getValue();
  }

  get employeeId(): EmployeeId | undefined {
    return this.props.employeeId;
  }

  get type(): DeliveryType {
    return this.props.type;
  }

  get intinerary(): DeliveryIntinerary {
    return this.props.intinerary;
  }

  get price(): DeliveryPrice | undefined {
    return this.props.price;
  }


  get location(): Location {
    return this.props.location;
  }

  public static create(props: DeliveryProps, id?: UniqueEntityID): Result<Delivery> {
    return Result.ok(new Delivery(props, id));
  }
}
