import { AssetRegistrationNumber } from "../../../../../modules/allocations/domain/assets/assetRegistrationNumber";

describe("Asset Registration Number", () => {
  describe("Create Asset Registration Number", () => {
    it("should create asset regitration correctly", () => {
      const assetIdOrError = AssetRegistrationNumber.create("52345234532");
      expect(assetIdOrError.isSuccess);
    });
  });
});
