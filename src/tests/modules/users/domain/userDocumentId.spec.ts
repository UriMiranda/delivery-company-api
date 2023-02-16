import { UserDocumentId } from "../../../../modules/users/domain/userDocumetId";


describe("User Document Id", () => {
  describe("create document id value object", () => {
    it("should create document correctly", () => {
      const documentIdOrError = UserDocumentId.create("44014004023");
      expect(documentIdOrError.isSuccess);
    });

    it("should fail using invalid document id", () => {
      const documentIdOrError = UserDocumentId.create("2949384923747");
      expect(documentIdOrError.isFailure);
    });
  });
});
