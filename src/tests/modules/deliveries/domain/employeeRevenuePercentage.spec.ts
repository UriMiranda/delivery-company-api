import { EmployeeRevenuePercentage } from "../../../../modules/deliveries/domain/employeeRevenuePercentage";

describe("Employee Revenue Percentage", () => {
  it("should create revenue percentage", () => {
    const revenuePercentageOrError = EmployeeRevenuePercentage.create(10.0);
    expect(revenuePercentageOrError.isSuccess);
  });


  it("should fail create a not possible revenue percentage", () => {
    const revenuePercentageOrError = EmployeeRevenuePercentage.create(50.0);
    expect(revenuePercentageOrError.isFailure);
  });
});
