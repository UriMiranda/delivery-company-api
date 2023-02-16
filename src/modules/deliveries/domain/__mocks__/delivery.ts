function DeliveryMock() {}

DeliveryMock.create = jest.fn().mockReturnValue({
  origin: "",
  destiny: "",
});

export default DeliveryMock;
