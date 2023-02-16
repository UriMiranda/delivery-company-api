import { Asset } from "../../../../../modules/allocations/domain/assets/asset";
import { AssetRegistrationNumber } from "../../../../../modules/allocations/domain/assets/assetRegistrationNumber";
import { Staff } from "../../../../../modules/allocations/domain/staff";
import { StaffDriverLicense, StaffDriverLicenseProps } from "../../../../../modules/allocations/domain/staff/staffDriverLicense";
import { StaffName } from "../../../../../modules/allocations/domain/staff/staffName";

describe("Asset", () => {
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

  describe("Create Asset", () => {
    it("should create asset correctly", () => {
      const assetIdOrError = Asset.create({
        registrationNumber: AssetRegistrationNumber.create("234432423").getValue(),
        staff: Staff.create({ name: StaffName.create("Teste").getValue(), driverLicense: StaffDriverLicense.create(driverLicense).getValue() }).getValue(),
      });
      expect(assetIdOrError.isSuccess);
    });
  });
});
