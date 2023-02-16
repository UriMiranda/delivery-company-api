import { StaffId } from "../../../../../modules/allocations/domain/staff/staffId";

describe("Staff Id", () => {
  describe("Create Staff Id", () => {
    it("should create staff Id", () => {
      const staffIdOrError = StaffId.create();

      expect(staffIdOrError.isSuccess).toBeTruthy();
    });
  });
});
