import { deliveryService } from "../../domain/services";
import { sequelizeDeliveryRepo, sequelizeEmployeeRepo } from "../../repos";
import { CreateDelivery } from "./CreateDelivery";

const createDeliveryUseCase = new CreateDelivery(deliveryService, sequelizeEmployeeRepo, sequelizeDeliveryRepo);

export { createDeliveryUseCase };
