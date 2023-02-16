//@ts-nocheck
import { DeliveryType } from "../../../../../modules/deliveries/domain/delivery";
import { CreateDelivery } from "../../../../../modules/deliveries/useCases/createDelivery/CreateDelivery";
import EmployeeRepo, { mockFindClosest } from "../../../../../modules/deliveries/repos/employeeRepo";
import DeliveryService, { mockCalculatePrice } from "../../../../../modules/deliveries/domain/services/deliveryService";
import DeliveryRepo, { mockSave } from "../../../../../modules/deliveries/repos/deliveryRepo";

jest.mock("../../../../../modules/deliveries/repos/employeeRepo");
jest.mock("../../../../../modules/deliveries/repos/deliveryRepo");
jest.mock("../../../../../modules/deliveries/domain/services/deliveryService");

describe("Create Delivery Use Case", () => {
  let deliveryService: DeliveryService;
  let employeeRepo: EmployeeRepo;
  let deliveryRepo: DeliveryRepo;

  beforeAll(() => {
    deliveryService = new DeliveryService();
    employeeRepo = new EmployeeRepo();
    deliveryRepo = new DeliveryRepo();
  });

  afterEach(() => {
    DeliveryService.mockClear();
    EmployeeRepo.mockClear();
    mockCalculatePrice.mockClear();
    mockFindClosest.mockClear();
    mockSave.mockClear();
  });

  it("create delivery correctly", async () => {
    const useCase = new CreateDelivery(deliveryService, employeeRepo, deliveryRepo);
    const createDeliveryResult = await useCase.execute({
      type: DeliveryType.express,
      origin: "03163030",
      destiny: "08162300",
    });
    expect(mockCalculatePrice).toHaveBeenCalledTimes(1);
    expect(mockSave).toHaveBeenCalledTimes(1);
    expect(createDeliveryResult.isRight()).toBeTruthy();
  });

  it("fail when not found an employee closest", async () => {
    employeeRepo.findClosest = jest.fn().mockReturnValue(null)
    const useCase = new CreateDelivery(deliveryService, employeeRepo, deliveryRepo);
    const createDeliveryResult = await useCase.execute({
      type: DeliveryType.express,
      origin: "03163030",
      destiny: "08162300",
    });
    expect(mockCalculatePrice).toHaveBeenCalledTimes(0);
    expect(mockSave).toHaveBeenCalledTimes(0);
    expect(createDeliveryResult.isLeft()).toBeTruthy();
  });

  it("fail when a invalid cep is given", async () => {
    const useCase = new CreateDelivery(deliveryService, employeeRepo, deliveryRepo);
    const createDeliveryResult = await useCase.execute({
      type: DeliveryType.express,
      origin: "03163030asda",
      destiny: "08162300",
    });
    expect(mockCalculatePrice).toHaveBeenCalledTimes(0);
    expect(mockSave).toHaveBeenCalledTimes(0);
    expect(createDeliveryResult.isLeft()).toBeTruthy();
  });
});
