import { sequelizeDeliveryRepo } from "../../repos";
import { GetDeliveryById } from "./GetDeliveryById";

const getDeliveryByIdUseCase = new GetDeliveryById(sequelizeDeliveryRepo);

export { getDeliveryByIdUseCase };
