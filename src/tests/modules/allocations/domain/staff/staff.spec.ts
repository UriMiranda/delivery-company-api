import { Staff } from "../../../../../modules/allocations/domain/staff";
import { StaffDriverLicense } from "../../../../../modules/allocations/domain/staff/staffDriverLicense";
import { StaffName } from "../../../../../modules/allocations/domain/staff/staffName";

describe("Staff Entity", () => {
  let dueAt: Date;
  let issuedAt: Date;

  beforeAll(() => {
    dueAt = new Date();
    issuedAt = new Date();
  });

  describe("create a staff", () => {
    it("should create a staff entity", () => {
      dueAt.setFullYear(2025);
      issuedAt.setFullYear(2018);
      const staffOrError = Staff.create({
        name: StaffName.create("Teste").getValue(),
        driverLicense: StaffDriverLicense.create({
          category: "B",
          dueAt: dueAt,
          issuedAt: issuedAt,
        }).getValue(),
      });
      expect(staffOrError.isSuccess).toBeTruthy();
    });
  });
});
