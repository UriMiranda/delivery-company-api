import { StaffName } from "../../../../../modules/allocations/domain/staff/staffName";

describe("Staff drive lincense", () => {
  describe("Create Staff Drive Lincense", () => {
    it("should create staff drive lincense", () => {
      const name = "test";
      const staffNameOrError = StaffName.create(name);
      const staffName = staffNameOrError.getValue();
      expect(staffName.value).toBe(name);
      expect(staffNameOrError.isSuccess).toBeTruthy();
    });
  });
});
