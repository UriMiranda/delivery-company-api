import { DeliveryType } from "../../domain/delivery";

export interface CreateDeliveryRequestDto {
  type: DeliveryType;
  origin: string;
  destiny: string;
}