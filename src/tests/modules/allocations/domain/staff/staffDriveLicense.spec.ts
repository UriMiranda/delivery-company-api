import { StaffDriverLicense, StaffDriverLicenseProps } from "../../../../../modules/allocations/domain/staff/staffDriverLicense";

describe("Staff drive lincense", () => {
  let issuedDate: Date;
  let dueDate: Date;
  let driverLicense: StaffDriverLicenseProps;

  beforeAll(() => {
    issuedDate = new Date();
    dueDate = new Date();
    issuedDate.setFullYear(2019);
    dueDate.setFullYear(2025);
    driverLicense = {
      category: "C",
      issuedAt: issuedDate,
      dueAt: dueDate,
    };
  });

  describe("Create Staff Drive Lincense", () => {
    it("should create staff drive lincense", () => {
      const staffDriverLicenseOrError = StaffDriverLicense.create(driverLicense);
      const staffDriverLicense = staffDriverLicenseOrError.getValue();
      expect(staffDriverLicense.category).toBe(driverLicense.category);
      expect(staffDriverLicense.issuedAt).toBe(issuedDate);
      expect(staffDriverLicense.dueAt).toBe(dueDate);
      expect(staffDriverLicenseOrError.isSuccess);
    });

    it("should fail because of driver's lincense is overdue", () => {
      dueDate.setFullYear(2021);
      driverLicense = {
        category: "C",
        issuedAt: issuedDate,
        dueAt: dueDate,
      };
      const staffDriverLicenseOrError = StaffDriverLicense.create(driverLicense);
      expect(staffDriverLicenseOrError.isFailure);
    });
  });
});
