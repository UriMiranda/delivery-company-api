import { EmployeeId } from "../../../../modules/deliveries/domain/employeeId";

describe("Employee Id", () => {
  it("should create correctly id", () => {
    const idOrError = EmployeeId.create();
    const employeeId = idOrError.getValue();
    expect(idOrError.isSuccess);
    expect(employeeId.id).toBeDefined();
  });
});
