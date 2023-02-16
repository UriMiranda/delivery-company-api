import { SequelizeDeliveryRepo } from "./sequelize/sequelizeDeliveryRepo";
import { SequelizeEmployeeRepo } from "./sequelize/sequelizeEmployeeRepo";

const sequelizeEmployeeRepo = new SequelizeEmployeeRepo();
const sequelizeDeliveryRepo = new SequelizeDeliveryRepo();

export { sequelizeEmployeeRepo, sequelizeDeliveryRepo };
