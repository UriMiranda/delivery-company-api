// @ts-nocheck
import { Delivery } from "../../../../../modules/deliveries/domain/delivery";
import DeliveryRepo, { mockFind } from "../../../../../modules/deliveries/repos/deliveryRepo";
import { GetDeliveryById } from "../../../../../modules/deliveries/useCases/getDeliveryById/GetDeliveryById";

jest.mock("../../../../../modules/deliveries/repos/deliveryRepo");

describe("Get delivery By Id", () => {
  let deliveryRepo: DeliveryRepo;

  beforeAll(() => {
    deliveryRepo = new DeliveryRepo();
  });

  it("should get delivery correctly", async () => {
    const useCase = new GetDeliveryById(deliveryRepo);
    const deliveryResultOrError = await useCase.execute({
      deliveryId: 1,
    });
    const delivery = deliveryResultOrError.value.getValue();
    expect(delivery).toBeInstanceOf(Delivery);
    expect(mockFind).toHaveBeenCalledTimes(1);
    expect(deliveryResultOrError.isRight()).toBeTruthy();
  });

  it("must fail when not found requested delivery", async () => {
    jest.spyOn(deliveryRepo, "find").mockReturnValue(null);
    const useCase = new GetDeliveryById(deliveryRepo);
    const deliveryResultOrError = await useCase.execute({
      deliveryId: 1,
    });
    const error = deliveryResultOrError.value.getErrorValue();
    expect(error).toMatchObject<{message: string}>({});
    expect(mockFind).toHaveBeenCalledTimes(1);
    expect(deliveryResultOrError.isLeft()).toBeTruthy();
  });
});
