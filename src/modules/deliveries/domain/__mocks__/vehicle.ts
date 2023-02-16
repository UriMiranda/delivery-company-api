import { VehicleName } from "../vehicleName";

function VehicleMock() {}

VehicleMock.create = jest.fn().mockReturnValue({
  name: VehicleName.create("Palio").getValue(),
});

export default VehicleMock;
