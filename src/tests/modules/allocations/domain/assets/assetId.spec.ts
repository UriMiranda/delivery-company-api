import { AssetId } from "../../../../../modules/allocations/domain/assets/assetId";

describe("Asset Id", () => {
  describe("Create Asset Id", () => {
    it("should create asset id correctly", () => {
      const assetIdOrError = AssetId.create();
      expect(assetIdOrError.isSuccess);
    });
  });
});
