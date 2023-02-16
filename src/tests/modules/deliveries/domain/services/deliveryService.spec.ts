//@ts-nocheck
import { Delivery, DeliveryType } from "../../../../../modules/deliveries/domain/delivery";
import { DeliveryId } from "../../../../../modules/deliveries/domain/deliveryId";
import { DeliveryIntinerary } from "../../../../../modules/deliveries/domain/deliveryIntinerary";
import { DeliveryPrice } from "../../../../../modules/deliveries/domain/deliveryPrice";
import Employee from "../../../../../modules/deliveries/domain/__mocks__/employee";
import { EmployeeId } from "../../../../../modules/deliveries/domain/employeeId";
import { Location } from "../../../../../modules/deliveries/domain/location";
import { DeliveryService } from "../../../../../modules/deliveries/domain/services/deliveryService";

jest.mock("../../../../../modules/deliveries/domain/employee");

describe("Delivery service", () => {
  let delivery: Delivery | null;
  let employee: Employee;
  let deliveryIntinerary: DeliveryIntinerary | null;
  let deliveryService: DeliveryService;

  beforeAll(() => {
    employee = Employee.create();
  });

  beforeEach(() => {
    delivery = null;
    deliveryIntinerary = null;
    deliveryService = new DeliveryService();
  });

  describe("calclute price", () => {
    it("calculate for express delivery type", () => {
      deliveryIntinerary = DeliveryIntinerary.create({
        origin: "03163030",
        destiny: "08162300",
      }).getValue();
      delivery = Delivery.create({
        deliveryId: DeliveryId.create().getValue(),
        employeeId: EmployeeId.create().getValue(),
        type: DeliveryType.express,
        intinerary: deliveryIntinerary,
        price: DeliveryPrice.create(12.0).getValue(),
        location: Location.create({
          latitude: "-38.49238492",
          longitude: "48.49238492",
          lastUpdateAt: new Date(),
        }).getValue(),
      }).getValue();
      const calculatePriceResult = deliveryService.calculatePrice(delivery, employee);
      expect(delivery.price?.value).toBe(calculatePriceResult.getValue());
      expect(calculatePriceResult.isSuccess).toBeTruthy();
    });

    it("calculate for fast delivery type", () => {
      deliveryIntinerary = DeliveryIntinerary.create({
        origin: "03163030",
        destiny: "08162300",
      }).getValue();
      delivery = Delivery.create({
        deliveryId: DeliveryId.create().getValue(),
        employeeId: EmployeeId.create().getValue(),
        type: DeliveryType.fast,
        intinerary: deliveryIntinerary,
        price: DeliveryPrice.create(12.0).getValue(),
        location: Location.create({
          latitude: "-38.49238492",
          longitude: "48.49238492",
          lastUpdateAt: new Date(),
        }).getValue(),
      }).getValue();
      const calculatePriceResult = deliveryService.calculatePrice(delivery, employee);
      expect(delivery.price?.value).toBe(calculatePriceResult.getValue());
      expect(calculatePriceResult.isSuccess).toBeTruthy();
    });

    it("calculate for pickup delivery type", () => {
      deliveryIntinerary = DeliveryIntinerary.create({
        origin: "03163030",
        destiny: "08162300",
      }).getValue();
      delivery = Delivery.create({
        deliveryId: DeliveryId.create().getValue(),
        employeeId: EmployeeId.create().getValue(),
        type: DeliveryType.pickup,
        intinerary: deliveryIntinerary,
        price: DeliveryPrice.create(12.0).getValue(),
        location: Location.create({
          latitude: "-38.49238492",
          longitude: "48.49238492",
          lastUpdateAt: new Date(),
        }).getValue(),
      }).getValue();
      const calculatePriceResult = deliveryService.calculatePrice(delivery, employee);
      expect(delivery.price?.value).toBe(calculatePriceResult.getValue());
      expect(calculatePriceResult.isSuccess).toBeTruthy();
    });
  });
});
